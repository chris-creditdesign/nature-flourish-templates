import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartYAxisLegend = ({ yAxisLegendText, chartInnerHeight, innerTop }) => {
	const horizontalMiddle = (chartInnerHeight + innerTop) / 2

	return (
		<g transform={`translate(0, ${horizontalMiddle}) rotate(270)`}>
			<text
				fontSize={theme.fontSize.normal}
				textAnchor="middle"
				dy="1.3em"
			>
				{yAxisLegendText}
			</text>
		</g>
	)
}

export default ChartYAxisLegend

ChartYAxisLegend.propTypes = {
	yAxisLegendText: PropTypes.string.isRequired,
	chartInnerHeight: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
}
