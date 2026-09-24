.PHONY: install dev build preview deploy clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy: build
	npm run deploy

clean:
	npm run clean