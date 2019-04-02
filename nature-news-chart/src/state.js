/**
 * Anything the end user can configure in the settings panel must be in
 * this object. The settings in template.yml reference these property names.
 */
const state = {
	headlineText: 'Headline',
	standfirstText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\nEt labore et dolore magna aliqua.',
	xAxisLegendText: 'X axis legend',
	yAxisLegendText: 'Y axis legend',
	footnoteText: '',
	chartType: 'vertical-bar',
	svgMargins: {
		top: 10,
		right: 20,
		bottom: 20,
		left: 20,
		headlineHeight: 30,
		keyHeight: 38,
		standfirstHeight: 36,
		yAxisWidth: 20,
		xAxisHeight: 16,
		yAxisLegendWidth: 16,
		xAxisLegendHeight: 16,
	},
	svgDimensions: {
		width: 800,
		height: 500,
	},
	copyrightDimensions: {
		width: 80,
		height: 15,
	},
	color: {
		svgBackgroundColor: '#f6f5ee',
		copyrightColor: '#6f7072',
	},
	textStyle: {
		fontFamily: 'sans-serif',
	},
	headlineStyle: {
		textTransform: 'uppercase',
		fontFamily: 'sans-serif',
		fontSize: 30,
		letterSpacing: 1,
	},
}

export default state
