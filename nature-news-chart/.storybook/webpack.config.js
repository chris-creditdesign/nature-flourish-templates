const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
	// `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.

	// Make whatever fine-grained changes you need
	config.module.rules.push({
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)\/(?!nature-graphic-components)/,
			use: {
				loader: "babel-loader",
			},
		})

	config.resolve =  {
		extensions: [".js", ".jsx"],
		alias: {
			react: path.resolve("./node_modules/react"),
			"react-dom": path.resolve("./node_modules/react-dom"),
			"@emotion/core": path.resolve(
				"./node_modules/@emotion/core"
			),
			"@emotion/styled": path.resolve(
				"./node_modules/@emotion/styled"
			),
			"emotion-theming": path.resolve(
				"./node_modules/emotion-theming"
			),
		},
	}

	// Return the altered config
	return config;
};