export var name = "popoto";
export var version = "2.0.3";
export var description = "Graph based search interface for Neo4j database.";
export var keywords = ["popoto","d3","neo4j","cypher","graph","search"];
export var homepage = "https://popotojs.com/";
export var bugs = {"url":"https://github.com/Nhogs/popoto/issues","email":"contact@popotojs.com"};
export var license = "GPL-3.0";
export var author = {"name":"Frederic Ciminera","email":"contact@popotojs.com"};
export var contributors = [];
export var main = "dist/popoto.node.js";
export var style = "dist/popoto.min.css";
export var unpkg = "dist/popoto.min.js";
export var jsdelivr = "dist/popoto.min.js";
export var module = "index";
export var repository = {"type":"git","url":"https://github.com/Nhogs/popoto.git"};
export var jest = {"setupFiles":["jest-canvas-mock"]};
export var scripts = {"build":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && node rollup.node && rollup -c --banner \"// Copyright (c) 2018 NHOGS Interactive.\" && npm run uglify","pretest":"npm run build","test":"jest --ci --coverage","uglify":"uglifyjs -b beautify=false,preamble=\"'// Copyright (c) 2018 NHOGS Interactive.'\" dist/popoto.js -c negate_iife=false -m -o dist/popoto.min.js && uglifycss css/popoto.css css/popoto-svg.css --output dist/popoto.min.css"};
export var dependencies = {"d3":"^5.4.0","jquery":"^3.3.1"};
export var devDependencies = {"babel-core":"^6.26.3","babel-jest":"^23.0.1","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","jest":"^23.1.0","jest-canvas-mock":"^1.0.2","json2module":"^0.0.3","rimraf":"^2.6.2","rollup":"^0.59.4","rollup-plugin-copy":"^0.2.3","rollup-plugin-node-resolve":"^3.3.0","uglify-js":"^3.3.28","uglifycss":"^0.0.29"};
