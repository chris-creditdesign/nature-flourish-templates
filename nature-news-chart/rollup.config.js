import { eslint } from 'rollup-plugin-eslint'
import nodeResolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

export default {
  entry: "src/index.js",
  format: "iife",
  moduleName: "template",
  dest: "template.js",
  sourceMap: true,

  // d3 relies on the node-resolve plugin
  plugins: [
	eslint(),
    nodeResolve(),
	babel({
		exclude: 'node_modules/**',
	}),
    uglify(),
  ]
};
