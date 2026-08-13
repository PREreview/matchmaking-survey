IMAGE := match-feedback-survey
SMOKE_CONTAINER := $(IMAGE)-smoke
SMOKE_PORT := 3001

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

.PHONY: build
build: .env
	docker build -t $(IMAGE) .

.PHONY: prod
prod: start-services build
	docker run --rm \
		--network $(shell docker inspect -f '{{range $$k,$$v := .NetworkSettings.Networks}}{{$$k}}{{end}}' $(shell docker compose ps -q postgres)) \
		--env-file .env \
		--env POSTGRES_URL=postgres://postgres:password@postgres:5432 \
		--env DB_FILE=/data/survey.db \
		-v $(PWD)/data:/data \
		-p 3000:3000 \
		$(IMAGE)

.PHONY: smoketest
smoketest: start-services build
	@set -e; \
	trap 'docker rm -f $(SMOKE_CONTAINER) >/dev/null 2>&1 || true; rm -f $(PWD)/data/smoke.db*' EXIT; \
	docker rm -f $(SMOKE_CONTAINER) >/dev/null 2>&1 || true; \
	docker run --rm --name $(SMOKE_CONTAINER) \
		--network $(shell docker inspect -f '{{range $$k,$$v := .NetworkSettings.Networks}}{{$$k}}{{end}}' $(shell docker compose ps -q postgres)) \
		--env-file .env \
		--env POSTGRES_URL=postgres://postgres:password@postgres:5432 \
		--env DB_FILE=/data/smoke.db \
		-v $(PWD)/data:/data \
		-p $(SMOKE_PORT):3000 \
		-d $(IMAGE) >/dev/null; \
	for i in $$(seq 1 60); do \
		if curl -sf http://localhost:$(SMOKE_PORT) -o /dev/null 2>/dev/null; then \
			echo "Smoke test passed"; \
			exit 0; \
		fi; \
		sleep 1; \
	done; \
	echo "Smoke test failed: /health did not respond within 60s"; \
	docker logs $(SMOKE_CONTAINER) 2>&1; \
	exit 1

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
