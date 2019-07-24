import React, { useContext } from "react"
import theme from "../../utils/theme"
import useDimensions from "../../customHooks/useDimensions"
import useData from "../../customHooks/useData"
import figureContext from "../../FigureContainer/figureContext"

const ChartXAxisBand = () => {
	const { xAxisFormat } = useContext(figureContext)
	const { chartInnerHeight, innerLeft, innerTop } = useDimensions()
	const { xScale } = useData()

	const ticks = xScale
		// .ticks(tickCount)
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

	const labels = xScale.map(tick => (
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
			transform={`translate(${innerLeft},${innerTop +
				chartInnerHeight})`}
		>
			{ticks}
			{labels}
		</g>
	)
}

export default ChartXAxisBand
