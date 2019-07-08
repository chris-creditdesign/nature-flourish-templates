import React, { useContext } from "react"
import theme from "../utils/theme"
import useDimensions from "../utils/useDimensions"
import useData from "../utils/useData"
import chartContext from "../GraphicContainer/chartContext"

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
				y2="0.5em"
				stroke={theme.color.line}
				strokeWidth={theme.strokeWidth.s}
				shapeRendering="crispEdges"
				strokeDasharray="none"
			/>
		))

	const labels = xScale.ticks(xAxisTickcount).map(tick => (
		<text
			key={tick}
			x={xScale(tick)}
			y={0}
			dy="1.5em"
			fontSize={theme.fontSize.normal}
			textAnchor="middle"
		>
			{xAxisFormat(tick)}
		</text>
	))

	return (
		<g
			transform={`translate(${innerLeft},${innerTop})`}
			aria-hidden
		>
			<g transform={`translate(0,${chartInnerHeight})`}>
				{ticks}
				{labels}
			</g>
		</g>
	)
}

export default ChartXAxis
