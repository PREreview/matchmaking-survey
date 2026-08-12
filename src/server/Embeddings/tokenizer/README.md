# Vendored `thenlper/gte-large` tokenizer

`tokenizer.json` and `tokenizer_config.json` are the tokenizer files used to
count and truncate text before it is sent to OpenRouter's `thenlper/gte-large`
embeddings endpoint. They are committed rather than fetched so that the app
starts without network access, and so that the tokenizer cannot change
underneath the ~137k stored vectors whose comparability depends on it.

|          |                                             |
| -------- | ------------------------------------------- |
| Source   | <https://huggingface.co/thenlper/gte-large> |
| Revision | `4bef63f39fcc5e2d6b0aae83089f307af4970164`  |
| Licence  | MIT                                         |

The model repo has no `LICENSE` file and no copyright notice: MIT is declared
only in the model card's frontmatter (`license: mit`). Because the revision above
is immutable, that declaration stays checkable at
<https://huggingface.co/thenlper/gte-large/blob/4bef63f39fcc5e2d6b0aae83089f307af4970164/README.md>.

## Refreshing

The revision is pinned in the `Makefile` as `TOKENIZER_REVISION`.

```sh
make update-tokenizer          # re-fetch the pinned revision over these files
git diff --exit-code           # no diff => still byte-identical to the Hub
```

To move to a different revision, edit `TOKENIZER_REVISION` and run
`make update-tokenizer`; the resulting diff is the change, and it lands in
review next to the SHA that produced it.

These files are excluded from `oxfmt` in the `format` and `fix-format` targets.
Reformatting them would not change tokenization -- the reformatted JSON parses
to a deep-equal object -- but it would make every refresh produce a 30,000-line
diff, which is what stops the check above from being useful.
