IMAGE := match-feedback-survey
DATA  := $(PWD)/data

TOKENIZER_DIR      := src/server/Embeddings/tokenizer
TOKENIZER_REPO     := thenlper/gte-large
TOKENIZER_REVISION := 4bef63f39fcc5e2d6b0aae83089f307af4970164
TOKENIZER_URL      := https://huggingface.co/$(TOKENIZER_REPO)/resolve/$(TOKENIZER_REVISION)

# Excluded from oxfmt so the vendored copies stay byte-identical to the Hub's.
TOKENIZER_UPSTREAM := '!$(TOKENIZER_DIR)/tokenizer*.json'

.PHONY: dev
dev: node_modules .env start-services
	mkdir -p data
	POSTGRES_URL=postgres://postgres:password@$(shell docker compose port postgres 5432) \
	export $$(grep -v '^#' .env | xargs) && pnpm exec tsx watch src/server/index.ts

.env:
	cp .env.example .env

node_modules: package.json pnpm-lock.yaml pnpm-workspace.yaml
	pnpm install --frozen-lockfile

.PHONY: start-services
start-services:
	docker compose up --detach postgres

.PHONY: prod
prod: .env
	docker build -t $(IMAGE) .
	mkdir -p $(DATA)
	export $$(grep -v '^#' .env | xargs) && docker run --rm -p $$PORT:$$PORT \
		-e ADMIN_PASSWORD=$$ADMIN_PASSWORD \
		-e PORT=$$PORT \
		-e DB_FILE=/data/survey.db \
		-v $(DATA):/data \
		$(IMAGE)

.PHONY: clear
clear:
	rm -rf data/

# Verify with `git diff --exit-code`; see $(TOKENIZER_DIR)/README.md.
.PHONY: update-tokenizer
update-tokenizer:
	curl -sSLf -o $(TOKENIZER_DIR)/tokenizer.json $(TOKENIZER_URL)/tokenizer.json
	curl -sSLf -o $(TOKENIZER_DIR)/tokenizer_config.json $(TOKENIZER_URL)/tokenizer_config.json

.PHONY: check
check: lint format typecheck test

.PHONY: lint
lint: node_modules
	pnpm exec oxlint .

.PHONY: format
format: node_modules
	pnpm exec oxfmt --check . $(TOKENIZER_UPSTREAM)

.PHONY: fix-format
fix-format: node_modules
	pnpm exec oxfmt --write . $(TOKENIZER_UPSTREAM)

.PHONY: typecheck
typecheck: node_modules
	pnpm exec tsc --noEmit -p tsconfig.server.json

.PHONY: test
test: node_modules
	pnpm exec vitest run

.PHONY: test-watch
test-watch: node_modules
	pnpm exec vitest

.PHONY: end2end
end2end:
	docker build -f Dockerfile.e2e -t $(IMAGE)-e2e .
	mkdir -p $(PWD)/playwright-report $(PWD)/test-results
	docker run --rm \
		-v $(PWD)/playwright-report:/app/playwright-report \
		-v $(PWD)/test-results:/app/test-results \
		$(IMAGE)-e2e
