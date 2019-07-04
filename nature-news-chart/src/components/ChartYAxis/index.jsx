import React, { useContext } from "react"
import StyledGroup from "./styles"
import useDimensions from "../utils/useDimensions"
import useData from "../utils/useData"
import chartContext from "../ChartContainer/chartContext"

const ChartYAxis = () => {
	const { yAxisTickcount, yAxisFormat } = useContext(chartContext)
	const { innerLeft, innerTop, chartInnerWidth } = useDimensions()
	const { yScale } = useData()

	const ticks = yScale
		.ticks(yAxisTickcount)
		.map((tick, i) => (
			<line
				key={tick}
				x1={-8}
				y1={yScale(tick)}
				x2={chartInnerWidth}
				y2={yScale(tick)}
				className={i === 0 ? "baseline" : "dottedLine"}
			/>
		))

	const labels = yScale.ticks(yAxisTickcount).map(tick => (
		<text key={tick} x={-15} y={yScale(tick)} dy="0.3em">
			{yAxisFormat(tick)}
		</text>
	))

	return (
		<StyledGroup
			transform={`translate(${innerLeft},${innerTop})`}
			aria-hidden
		>
			{labels}
			{ticks}
		</StyledGroup>
	)
}

export default ChartYAxis
