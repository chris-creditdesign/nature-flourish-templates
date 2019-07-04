module.exports = {
	env: {
		es6: true,
		browser: true
	},
	extends: [
		"airbnb",
		"prettier",
		"prettier/react"
	],
	plugins: [
		"html",
		"prettier",
		"react-hooks"
	],
	rules: {
		semi: "off",
		"no-tabs": "off",
		"no-console": "warn",
		indent: ["error", "tab"],
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
		"react-hooks/rules-of-hooks": "error",
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				printWidth: 80,
				tabWidth: 8,
				useTabs: true,
				semi: false,
			}
		]
	},
	parser: "babel-eslint",
	parserOptions: {
		allowImportExportEverywhere: true
	}
}