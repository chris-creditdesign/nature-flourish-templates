/**
 * Anything the end user can configure in the settings panel must be in
 * this object. The settings in template.yml reference these property names.
 */
const state = {
	width: 600,
	height: 300,
	headLine: "headline headline",
	standFirst:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis reiciendis exercitationem dolores, vel perspiciatis recusandae deserunt hic harum.",
	title: "Chart Title",
	chartMargin: {
		top: 0,
		right: 20,
		bottom: 0,
		left: 20,
	},
	chartInnerMargin: {
		top: 10,
		right: 20,
		bottom: 40,
		left: 80,
	},
	yAxisTickCount: 5,
	xAxisTickCount: 10,
	yAxisLegendText: "Y-axis legend text just a test",
	xAxisLegendText: "X-axis legend text",
}

export default state
