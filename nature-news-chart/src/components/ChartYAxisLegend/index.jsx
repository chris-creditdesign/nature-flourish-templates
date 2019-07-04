import React, { useContext } from "react"
import StyledGroup from "./styles"
import chartContext from "../ChartContainer/chartContext"
import useDimensions from "../utils/useDimensions"

const ChartYAxisLegend = () => {
	const { yAxisLegendText } = useContext(chartContext)
	const { chartInnerHeight } = useDimensions()

	return (
		<StyledGroup
			transform={`translate(0, ${chartInnerHeight /
				2}) rotate(270)`}
			aria-hidden
		>
			<text dy="1.3em">{yAxisLegendText}</text>
		</StyledGroup>
	)
}

export default ChartYAxisLegend
