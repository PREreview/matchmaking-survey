#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <input.csv> [output.csv]"
  echo "  Columns: Server, Include?, OpenAlex source ID, include since, primary_topic.field.id, publication count"
  echo "  Queries OpenAlex and fills in the 'publication count' column."
  exit 1
}

[[ $# -lt 1 ]] && usage

INPUT="$1"
OUTPUT="${2:-${INPUT%.csv}-enriched.csv}"

if [[ ! -f "$INPUT" ]]; then
  echo "Error: file not found: $INPUT" >&2
  exit 1
fi

for cmd in jq python3 curl; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Error: $cmd is required but not installed" >&2
    exit 1
  fi
done

MAILTO="engineering@prereview.org"

# Parse a CSV line into tab-separated fields (handles quoted fields with commas)
parse_row() {
  python3 -c "
import csv, sys
fields = next(csv.reader([sys.argv[1]]))
while len(fields) < 6:
    fields.append('')
print('\t'.join(fields))
" "$1"
}

# Reconstruct a CSV row with the last field replaced by $2
set_last_field() {
  python3 -c "
import csv, sys, io
fields = next(csv.reader([sys.argv[1]]))
while len(fields) < 6:
    fields.append('')
fields[-1] = sys.argv[2]
buf = io.StringIO()
csv.writer(buf).writerow(fields)
print(buf.getvalue().rstrip())
" "$1" "$2"
}

# Build the primary_topic.field.id filter segment from the spec column
field_filter() {
  local spec="$1"
  if [[ -z "$spec" || "$spec" == "all" ]]; then
    echo ""
  elif [[ "$spec" =~ ^exclude\((.+)\)$ ]]; then
    local ids="${BASH_REMATCH[1]}"
    local out=""
    IFS=',' read -ra arr <<< "$ids"
    for id in "${arr[@]}"; do
      id="${id// /}"
      out="${out},primary_topic.field.id:!${id}"
    done
    echo "$out"
  else
    echo ",primary_topic.field.id:${spec}"
  fi
}

query_count() {
  local source_filter="$1"
  local from_date="$2"
  local extra_filter="$3"
  local filter="${source_filter},from_publication_date:${from_date},type:preprint,has_abstract:true${extra_filter}"

  local url="https://api.openalex.org/works?filter=${filter}&per-page=1&select=id&mailto=${MAILTO}"

  local response
  response=$(curl -sf --max-time 15 \
    -H "User-Agent: source-enrichment-script" \
    "$url" 2>/dev/null) || { echo "ERROR"; return; }

  echo "$response" | jq -r '.meta.count // "ERROR"'
}

echo "Reading: $INPUT" >&2
echo "Writing: $OUTPUT" >&2

total=0
errors=0
first=true

while IFS= read -r line || [[ -n "$line" ]]; do
  line="${line%$'\r'}"  # strip carriage return if present

  if $first; then
    first=false
    echo "$line" > "$OUTPUT"  # header already has all column names
    continue
  fi

  [[ -z "$line" ]] && continue

  parsed=$(parse_row "$line")
  IFS=$'\t' read -ra cols <<< "$parsed"

  source_id="${cols[2]:-}"
  from_date="${cols[3]:-}"
  field_spec="${cols[4]:-}"

  # Validate: must be locations.source.id:<s+10digits> or doi_starts_with:<prefix>
  if [[ ! "$source_id" =~ ^locations\.source\.id:[sS][0-9]{10}$ ]] && [[ "$source_id" != doi_starts_with:* ]]; then
    echo "  SKIP: invalid source ID: '${source_id}'" >&2
    continue
  fi

  extra=$(field_filter "$field_spec")
  count=$(query_count "$source_id" "$from_date" "$extra")

  if [[ "$count" == "ERROR" ]]; then
    echo "  WARN: failed for source='${source_id}' field='${field_spec}'" >&2
    ((errors++)) || true
  else
    ((total++)) || true
  fi

  echo "  ${cols[0]} [${field_spec}]: ${count}" >&2

  set_last_field "$line" "$count" >> "$OUTPUT"

  # Be polite to the API — 10 req/s is the stated limit
  sleep 0.12

done < "$INPUT"

echo "Done. $total rows enriched, $errors errors." >&2
echo "Output: $OUTPUT" >&2
