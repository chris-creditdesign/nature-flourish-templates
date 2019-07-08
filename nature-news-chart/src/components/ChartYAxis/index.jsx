import React, { useContext } from "react"
import theme from "../utils/theme"
import useDimensions from "../utils/useDimensions"
import useData from "../utils/useData"
import chartContext from "../GraphicContainer/chartContext"

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
				stroke={theme.color.line}
				strokeWidth={
					i === 0
						? theme.strokeWidth.xl
						: theme.strokeWidth.s
				}
				strokeDasharray={i === 0 ? "none" : "2, 3"}
			/>
		))

	const labels = yScale.ticks(yAxisTickcount).map(tick => (
		<text
			key={tick}
			x={-15}
			y={yScale(tick)}
			dy="0.3em"
			fontSize={theme.fontSize.normal}
			textAnchor="end"
		>
			{yAxisFormat(tick)}
		</text>
	))

	return (
		<g
			transform={`translate(${innerLeft},${innerTop})`}
			aria-hidden
		>
			{labels}
			{ticks}
		</g>
	)
}

export default ChartYAxis
