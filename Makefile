IMAGE := match-feedback-survey
DATA  := $(PWD)/data

.PHONY: dev
dev: node_modules .env
	mkdir -p data
	export $$(grep -v '^#' .env | xargs) && pnpm exec tsx watch src/server/index.ts

.env:
	cp .env.example .env

node_modules: package.json pnpm-lock.yaml pnpm-workspace.yaml
	pnpm install --frozen-lockfile

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

.PHONY: check
check: lint format typecheck test

.PHONY: lint
lint: node_modules
	pnpm exec oxlint .

.PHONY: format
format: node_modules
	pnpm exec oxfmt --check .

.PHONY: fix-format
fix-format: node_modules
	pnpm exec oxfmt --write .

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
