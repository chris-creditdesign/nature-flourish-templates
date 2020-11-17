import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    name: "template",
    file: "template.js",
    sourcemap: true,
  },
  plugins: [
    resolve(),
	svelte({
		// we'll extract any component CSS out into
		// a separate file — better for performance
		css: css => {
			css.write('static/style.css');
		},
		hydratable: true,
	})
  ],
  /* Cyclic dependencies are allowed in ES6, and such imports occur
     in many d3 components, so suppress those rollup warnings. */
  onwarn: function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  }
};
