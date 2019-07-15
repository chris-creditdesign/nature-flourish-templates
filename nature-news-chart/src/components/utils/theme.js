const colors = {
	black: "#333333",
	grey: "#3a3a3a",
	midGrey: "#888888",
	lightGrey: "#e1e1e1",
	offWhite: "#ededed",
	white: "#ffffff",
	cream: "#F6F5EE",
}

const space = ["0", "0.4rem", "0.6rem", "1.2rem"]

const theme = {
	color: {
		line: colors.black,
		border: colors.grey,
	},
	chartColor: ["#EA5153", "#75C6C5", "#5A527E", "#8B0D16", "#8FC297"],
	backgroundColor: {
		chart: colors.white,
		extraLight: colors.offWhite,
		light: colors.lightGrey,
		midDark: colors.midGrey,
		dark: colors.grey,
	},
	textColor: {
		normal: colors.black,
		light: colors.midGrey,
		onDarkFade: colors.lightGrey,
		onDark: colors.white,
	},
	fontWeight: {
		normal: "400",
		bold: "600",
	},
	fontSize: {
		s: "0.8rem",
		normal: "1rem",
		l: "1.2rem",
		xl: "1.6rem",
		xxl: "2.0rem",
	},
	border: `1px solid ${colors.grey}`,
	buttonPadding: "5px 10px",
	borderRadius: "5px",
	space: {
		none: space[0],
		s: space[1],
		l: space[2],
		xl: space[3],
	},
	margin: {
		below: {
			xs: `0 0 ${space[1]} 0`,
			s: `0 0 ${space[2]} 0`,
			l: `0 0 ${space[3]} 0`,
		},
		right: {
			xs: `0 ${space[1]} 0 0`,
			s: `0 ${space[2]} 0 0`,
			l: `0 ${space[3]} 0 0`,
		},
	},
	padding: {
		allAround: {
			xs: `${space[1]}`,
			s: `${space[2]}`,
			l: `${space[3]}`,
		},
		moreTopThanSide: {
			s: `${space[2]} ${space[1]}`,
			l: `${space[3]} ${space[2]}`,
		},
		moreSideThanTop: {
			s: `${space[1]} ${space[2]}`,
			l: `${space[2]} ${space[3]}`,
		},
	},
	casesColourRange: [
		"#fff5f0",
		"#fee0d2",
		"#fcbba1",
		"#fc9272",
		"#fb6a4a",
		"#ef3b2c",
		"#cb181d",
		"#a50f15",
		"#67000d",
		"#000000",
	],
	vaccinationColourRange: [
		"#ffffff",
		"#f7fcf5",
		"#e5f5e0",
		"#c7e9c0",
		"#a1d99b",
		"#74c476",
		"#41ab5d",
		"#238b45",
		"#006d2c",
		"#00441b",
	],
	strokeWidth: {
		s: "1px",
		l: "2px",
		xl: "3px",
	},
	dotRadius: {
		s: "4px",
		l: "8px",
	},
	transitionTime: 400,
}

export default theme
