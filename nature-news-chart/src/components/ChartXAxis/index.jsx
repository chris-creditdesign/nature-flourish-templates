import React, { useContext } from "react"
import StyledGroup from "./styles"
import useDimensions from "../utils/useDimensions"
import useData from "../utils/useData"
import chartContext from "../ChartContainer/chartContext"

const ChartXAxis = () => {
	const { xAxisTickcount, xAxisFormat } = useContext(chartContext)
	const { innerLeft, innerTop, chartInnerHeight } = useDimensions()
	const { xScale } = useData()

	const ticks = xScale
		.ticks(xAxisTickcount)
		.map(tick => (
			<line
				key={tick}
				x1={xScale(tick)}
				y1={0}
				x2={xScale(tick)}
				y2={8}
			/>
		))

	const labels = xScale.ticks(xAxisTickcount).map(tick => (
		<text key={tick} x={xScale(tick)} y={20}>
			{xAxisFormat(tick)}
		</text>
	))

	return (
		<StyledGroup
			transform={`translate(${innerLeft},${innerTop})`}
			aria-hidden
		>
			<g transform={`translate(0,${chartInnerHeight})`}>
				{ticks}
				{labels}
			</g>
		</StyledGroup>
	)
}

export default ChartXAxis
