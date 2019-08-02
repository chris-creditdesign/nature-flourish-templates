/**
 * Anything the end user can configure in the settings panel must be in
 * this object. The settings in template.yml reference these property names.
 */
const state = {
	chartInnerMargin: {
		top: 10,
		right: 20,
		bottom: 30,
		left: 75,
	},
	chartMargin: {
		top: 0,
		right: 20,
		bottom: 0,
		left: 20,
	},
	chartType: "lineChart",
	headLine: "Headline headline",
	height: 300,
	standFirst:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis reiciendis exercitationem dolores, vel perspiciatis recusandae deserunt hic harum.",
	footnoteText: "*This is the footnote text",
	sourceText: "This is the source text",
	xAxisLegendText: "X-axis legend text",
	xAxisTickCount: 10,
	yAxisLegendText: "Y-axis legend text",
	yAxisTickCount: 5,
}

export default state
