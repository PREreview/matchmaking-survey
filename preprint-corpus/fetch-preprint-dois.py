#!/usr/bin/env python3
"""Fetch preprint DOIs from OpenAlex for the sources listed in preprint-doi-sources.csv.

Progress is tracked in a SQLite database so the script is idempotent: rerunning
it resumes each source from its last OpenAlex pagination cursor instead of
re-fetching from scratch, and DOIs are deduplicated on insert.

Subcommands:
  fetch   - page through OpenAlex for each pending source (ascending publication count)
  status  - show per-source progress
  export  - write the deduplicated DOI list to a plain text file
"""
import argparse
import csv
import json
import re
import sqlite3
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

MAILTO = "engineering@prereview.org"
API_BASE = "https://api.openalex.org/works"
SOURCE_ID_RE = re.compile(r"^locations\.source\.id:[sS][0-9]{10}$")


def field_filter(spec):
    """Mirror enrich-sources.sh's field_filter(): build the primary_topic.field.id clause."""
    spec = (spec or "").strip()
    if spec == "" or spec == "all":
        return ""
    m = re.match(r"^exclude\((.+)\)$", spec)
    if m:
        ids = [i.strip() for i in m.group(1).split(",") if i.strip()]
        return "".join(f",primary_topic.field.id:!{i}" for i in ids)
    return f",primary_topic.field.id:{spec}"


def build_filter(source_filter, from_date, field_spec):
    return (
        f"{source_filter},from_publication_date:{from_date},"
        f"type:preprint,has_abstract:true{field_filter(field_spec)}"
    )


def valid_source_id(source_id):
    return bool(SOURCE_ID_RE.match(source_id)) or source_id.startswith("doi_starts_with:")


def read_sources(csv_path, only=None):
    rows = []
    with open(csv_path, newline="") as f:
        reader = csv.reader(f)
        header = next(reader, None)
        for line in reader:
            if not line:
                continue
            fields = list(line) + [""] * (6 - len(line))
            server, include, source_filter, from_date, field_spec, pub_count = fields[:6]
            if include.strip().upper() != "Y":
                continue
            if only and server not in only:
                continue
            if not valid_source_id(source_filter):
                print(f"  SKIP: invalid source ID for {server!r}: {source_filter!r}", file=sys.stderr)
                continue
            try:
                expected_count = int(pub_count)
            except ValueError:
                print(f"  SKIP: invalid publication count for {server!r}: {pub_count!r}", file=sys.stderr)
                continue
            rows.append(
                {
                    "server": server,
                    "source_filter": source_filter,
                    "from_date": from_date,
                    "field_spec": field_spec,
                    "expected_count": expected_count,
                }
            )
    rows.sort(key=lambda r: r["expected_count"])
    return rows


def init_db(conn):
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS sources (
            server TEXT NOT NULL,
            source_filter TEXT NOT NULL,
            from_date TEXT NOT NULL,
            field_spec TEXT NOT NULL,
            expected_count INTEGER NOT NULL,
            cursor TEXT NOT NULL DEFAULT '*',
            fetched_count INTEGER NOT NULL DEFAULT 0,
            done INTEGER NOT NULL DEFAULT 0,
            updated_at TEXT,
            PRIMARY KEY (server, source_filter, from_date, field_spec)
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS dois (
            doi TEXT PRIMARY KEY,
            server TEXT NOT NULL,
            openalex_work_id TEXT,
            inserted_at TEXT NOT NULL
        )
        """
    )
    conn.commit()


def upsert_source_rows(conn, rows):
    for r in rows:
        conn.execute(
            """
            INSERT OR IGNORE INTO sources
                (server, source_filter, from_date, field_spec, expected_count, cursor, fetched_count, done)
            VALUES (?, ?, ?, ?, ?, '*', 0, 0)
            """,
            (r["server"], r["source_filter"], r["from_date"], r["field_spec"], r["expected_count"]),
        )
    conn.commit()


def normalize_doi(doi_url):
    doi = re.sub(r"^https?://doi\.org/", "", doi_url, flags=re.IGNORECASE)
    return doi.lower()


def http_get_json(url, timeout, max_retries):
    last_err = None
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "preprint-doi-fetch-script"})
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code == 429:
                time.sleep(2 * attempt)
            else:
                time.sleep(1 * attempt)
        except Exception as e:  # noqa: BLE001 - network errors, timeouts, etc.
            last_err = e
            time.sleep(1 * attempt)
    print(f"  WARN: request failed after {max_retries} attempts: {last_err}", file=sys.stderr)
    return None


def fetch_source(conn, row, per_page, sleep_s, timeout, max_retries):
    server, source_filter, from_date, field_spec = (
        row["server"],
        row["source_filter"],
        row["from_date"],
        row["field_spec"],
    )
    cursor = row["cursor"]
    fetched_count = row["fetched_count"]
    filter_str = build_filter(source_filter, from_date, field_spec)
    encoded_filter = urllib.parse.quote(filter_str, safe=":,!/")

    while True:
        encoded_cursor = urllib.parse.quote(cursor, safe="")
        url = (
            f"{API_BASE}?filter={encoded_filter}&per-page={per_page}"
            f"&cursor={encoded_cursor}&select=id,doi&mailto={MAILTO}"
        )
        response = http_get_json(url, timeout, max_retries)
        if response is None:
            print(f"  {server} [{field_spec}]: stopping early, cursor preserved for resume", file=sys.stderr)
            return

        results = response.get("results", [])
        for w in results:
            doi = w.get("doi")
            if not doi:
                continue
            conn.execute(
                """
                INSERT OR IGNORE INTO dois (doi, server, openalex_work_id, inserted_at)
                VALUES (?, ?, ?, datetime('now'))
                """,
                (normalize_doi(doi), server, w.get("id")),
            )

        fetched_count += len(results)
        next_cursor = (response.get("meta") or {}).get("next_cursor")

        if next_cursor and results:
            conn.execute(
                """
                UPDATE sources SET cursor = ?, fetched_count = ?, updated_at = datetime('now')
                WHERE server = ? AND source_filter = ? AND from_date = ? AND field_spec = ?
                """,
                (next_cursor, fetched_count, server, source_filter, from_date, field_spec),
            )
            conn.commit()
            print(f"  {server} [{field_spec}]: {fetched_count}/{row['expected_count']}", file=sys.stderr)
            cursor = next_cursor
            time.sleep(sleep_s)
        else:
            conn.execute(
                """
                UPDATE sources SET cursor = '', fetched_count = ?, done = 1, updated_at = datetime('now')
                WHERE server = ? AND source_filter = ? AND from_date = ? AND field_spec = ?
                """,
                (fetched_count, server, source_filter, from_date, field_spec),
            )
            conn.commit()
            print(f"  {server} [{field_spec}]: done, {fetched_count} fetched", file=sys.stderr)
            return


def cmd_fetch(args):
    only = set(args.only.split(",")) if args.only else None
    rows = read_sources(args.csv, only=only)
    if not rows:
        print("No matching sources to fetch.", file=sys.stderr)
        return

    conn = sqlite3.connect(args.db)
    init_db(conn)
    upsert_source_rows(conn, rows)

    only_clause = ""
    params = []
    if only:
        placeholders = ",".join("?" for _ in only)
        only_clause = f" AND server IN ({placeholders})"
        params.extend(only)

    pending = conn.execute(
        f"""
        SELECT server, source_filter, from_date, field_spec, expected_count, cursor, fetched_count
        FROM sources WHERE done = 0{only_clause} ORDER BY expected_count ASC
        """,
        params,
    ).fetchall()

    if not pending:
        print("Nothing pending — all matching sources already fetched.", file=sys.stderr)
        conn.close()
        return

    for (server, source_filter, from_date, field_spec, expected_count, cursor, fetched_count) in pending:
        row = {
            "server": server,
            "source_filter": source_filter,
            "from_date": from_date,
            "field_spec": field_spec,
            "expected_count": expected_count,
            "cursor": cursor,
            "fetched_count": fetched_count,
        }
        print(f"Fetching {server} [{field_spec}] (expected ~{expected_count})...", file=sys.stderr)
        fetch_source(conn, row, args.per_page, args.sleep, args.timeout, args.max_retries)

    conn.close()


def cmd_status(args):
    conn = sqlite3.connect(args.db)
    init_db(conn)
    rows = conn.execute(
        """
        SELECT server, field_spec, from_date, fetched_count, expected_count, done
        FROM sources ORDER BY expected_count ASC
        """
    ).fetchall()
    for server, field_spec, from_date, fetched_count, expected_count, done in rows:
        status = "done" if done else "pending"
        print(f"{server:20} [{field_spec:20}] since {from_date}  {fetched_count:>6}/{expected_count:<6} {status}")
    total = conn.execute("SELECT COUNT(*) FROM dois").fetchone()[0]
    print(f"\nTotal distinct DOIs stored: {total}")
    conn.close()


def cmd_export(args):
    conn = sqlite3.connect(args.db)
    init_db(conn)
    rows = conn.execute("SELECT doi FROM dois ORDER BY doi").fetchall()
    with open(args.output, "w") as f:
        for (doi,) in rows:
            f.write(doi + "\n")
    print(f"Wrote {len(rows)} DOIs to {args.output}", file=sys.stderr)
    conn.close()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    p_fetch = sub.add_parser("fetch", help="Page through OpenAlex for pending sources")
    p_fetch.add_argument("--csv", default="preprint-doi-sources.csv")
    p_fetch.add_argument("--db", default="preprint-dois.sqlite3")
    p_fetch.add_argument("--only", help="Comma-separated server names to restrict to (for testing)")
    p_fetch.add_argument("--per-page", type=int, default=200)
    p_fetch.add_argument("--sleep", type=float, default=0.12, help="Seconds to sleep between page requests")
    p_fetch.add_argument("--timeout", type=int, default=15)
    p_fetch.add_argument("--max-retries", type=int, default=3)
    p_fetch.set_defaults(func=cmd_fetch)

    p_status = sub.add_parser("status", help="Show per-source progress")
    p_status.add_argument("--db", default="preprint-dois.sqlite3")
    p_status.set_defaults(func=cmd_status)

    p_export = sub.add_parser("export", help="Write the deduplicated DOI list to a text file")
    p_export.add_argument("--db", default="preprint-dois.sqlite3")
    p_export.add_argument("--output", default="preprint-dois.txt")
    p_export.set_defaults(func=cmd_export)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
