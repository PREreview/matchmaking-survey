IMAGE := match-feedback-survey
DATA  := $(PWD)/data

.PHONY: dev
dev: node_modules .env
	hivemind

.env:
	cp .env.example .env

node_modules: package.json pnpm-lock.yaml pnpm-workspace.yaml
	pnpm install --frozen-lockfile

.PHONY: prod
prod:
	docker build -t $(IMAGE) .
	mkdir -p $(DATA)
	docker run --rm -p 3000:3000 \
		-e ADMIN_PASSWORD=secret \
		-v $(DATA):/data \
		$(IMAGE)

.PHONY: clear
clear:
	rm -rf data/

.PHONY: check
check: node_modules
	pnpm lint
	pnpm typecheck
	pnpm test

.PHONY: end2end
end2end:
	docker build -f Dockerfile.e2e -t $(IMAGE)-e2e .
	mkdir -p $(PWD)/playwright-report $(PWD)/test-results
	docker run --rm \
		-v $(PWD)/playwright-report:/app/playwright-report \
		-v $(PWD)/test-results:/app/test-results \
		$(IMAGE)-e2e
