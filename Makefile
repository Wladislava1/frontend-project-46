publish:  
	npm publish --dry-run

install:
	npm ci

gendiff:
	node bin/gendiff.js -h default.json default1.json