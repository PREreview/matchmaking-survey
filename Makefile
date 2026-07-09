IMAGE := match-feedback-survey
DATA  := $(PWD)/data

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
