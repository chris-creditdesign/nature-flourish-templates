const path = require("path")

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./"), // string
		filename: "template.js",
		publicPath: "./",
		library: "template",
		libraryTarget: "window",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)\/(?!nature-graphic-components)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
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
	},
}
