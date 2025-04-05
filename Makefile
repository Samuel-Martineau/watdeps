cytoscape_version = v3.31.2
cytoscape_base_url = https://raw.githubusercontent.com/cytoscape/cytoscape.js/refs/tags/$(cytoscape_version)

.PHONY: vendor dev clean

vendor/cytoscape.min.js:
	curl --create-dirs -o $@ $(cytoscape_base_url)/dist/cytoscape.min.js

vendor/cytoscape.d.ts:
	curl --create-dirs -o $@ $(cytoscape_base_url)/index.d.ts

dist: vendor/cytoscape.min.js data/all.js $(wildcard *.html) $(wildcard *.js)
	rm -rf $@
	mkdir $@
	cp --parents $^ $@

dist.tar.gz: dist
	tar czf $@ $^

vendor: vendor/cytoscape.min.js vendor/cytoscape.d.ts

dev:
	live-server

clean:
	rm -rf dist
	rm -f dist.tar.gz
	rm -rf vendor

data/math.js:
	python ./scripts/generate.py math
data/amath.js:
	python ./scripts/generate.py amath
data/pmath.js:
	python ./scripts/generate.py pmath

data/all.js: data/math.js data/amath.js data/pmath.js
	cat $^ > $@