const path = require("path")

module.exports = {
	mode: "production",
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
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
}
