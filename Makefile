IMAGE := match-feedback-survey

.PHONY: dev
dev: node_modules .env start-services
	mkdir -p data
	POSTGRES_URL=postgres://postgres:password@$(shell docker compose port postgres 5432) \
	pnpm exec tsx watch --env-file .env src/server/index.ts

.env:
	cp .env.example .env

node_modules: package.json pnpm-lock.yaml pnpm-workspace.yaml
	pnpm install --frozen-lockfile

.PHONY: start-services
start-services:
	docker compose up --detach postgres

.PHONY: prod
prod: .env start-services
	docker build -t $(IMAGE) .
	docker run --rm \
		--network $(shell docker inspect -f '{{range $$k,$$v := .NetworkSettings.Networks}}{{$$k}}{{end}}' $(shell docker compose ps -q postgres)) \
		--env-file .env \
		--env POSTGRES_URL=postgres://postgres:password@postgres:5432 \
		--env DB_FILE=/data/survey.db \
		-v $(PWD)/data:/data \
		-p 3000:3000 \
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
