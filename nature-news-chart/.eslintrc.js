module.exports = {
	env: {
		es6: true,
		browser: true
	},
	extends: "airbnb",
	rules: {
		semi: "off",
		"no-tabs": "off",
		"no-console": "warn",
		indent: ["error", "tab"],
	},
	parser: "babel-eslint",
	parserOptions: {
		allowImportExportEverywhere: true
	}
}