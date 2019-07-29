import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartYAxisBaseline = ({
	chartInnerWidth,
	innerLeft,
	innerTop,
	yAxisTickCount,
	yScale,
}) => {
	const ticks = yScale
		.ticks(yAxisTickCount)
		.slice(0, 1)
		.map(tick => (
			<line
				key={tick}
				x1={-8}
				y1={yScale(tick)}
				x2={chartInnerWidth}
				y2={yScale(tick)}
				stroke={theme.color.line}
				strokeWidth={theme.strokeWidth.xl}
				strokeDasharray="none"
			/>
		))

	return <g transform={`translate(${innerLeft},${innerTop})`}>{ticks}</g>
}

export default ChartYAxisBaseline

ChartYAxisBaseline.propTypes = {
	chartInnerWidth: PropTypes.number.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	yAxisTickCount: PropTypes.number.isRequired,
	yScale: PropTypes.func.isRequired,
}
