publish:  
	npm publish --dry-run

install:
	npm ci

lint:
	npx eslint .
	
test:
	npm test

test-coverage:
	npm run test:coverage
