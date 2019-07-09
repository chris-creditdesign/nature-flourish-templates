module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
		"@emotion/babel-preset-css-prop",
	],
	plugins: [
		"macros",
		"@babel/plugin-proposal-object-rest-spread",
		"emotion",
	],
}
