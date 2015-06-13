BABEL = ./node_modules/.bin/babel

build: lib/index.js
	@mkdir -p node/
	@$(BABEL) lib/index.js > node/index.js
