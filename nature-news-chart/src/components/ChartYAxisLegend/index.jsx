import React, { useContext } from "react"
import theme from "../utils/theme"
import chartContext from "../GraphicContainer/chartContext"
import useDimensions from "../utils/useDimensions"

const ChartYAxisLegend = () => {
	const { yAxisLegendText } = useContext(chartContext)
	const { chartInnerHeight, innerTop } = useDimensions()

	const horizontalMiddle = (chartInnerHeight + innerTop) / 2

	return (
		<g
			transform={`translate(0, ${horizontalMiddle}) rotate(270)`}
			aria-hidden
		>
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
