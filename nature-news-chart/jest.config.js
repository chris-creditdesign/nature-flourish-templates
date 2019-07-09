module.exports = {
	// A map from regular expressions to module names that allow to stub out resources with a single module
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less)$": "identity-obj-proxy",
	},
	// The paths to modules that run some code to configure or set up the testing environment before each test
	setupFiles: ["<rootDir>/enzyme.config.js"],
}
