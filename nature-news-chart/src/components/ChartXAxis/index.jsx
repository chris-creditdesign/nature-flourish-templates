import React, { useState, useContext, useEffect, useRef } from "react"
import theme from "../utils/theme"
import useDimensions from "../utils/useDimensions"
import useData from "../utils/useData"
import chartContext from "../GraphicContainer/chartContext"

const widthReducer = (accumulator, currentValue) => {
	const { width } = currentValue.getBBox()
	return accumulator + width
}

const getAverageTextNodeWidth = (elem, settings = { padding: 20 }) => {
	const textNodes = elem.getElementsByTagName("text")
	const textWidth = Array.from(textNodes).reduce(widthReducer, 0)

	const averageTextNodeWidth = textWidth / textNodes.length

	return parseInt(averageTextNodeWidth, 10) + settings.padding
}

const ChartXAxis = () => {
	const { xAxisTickCount, xAxisFormat } = useContext(chartContext)
	const {
		chartInnerHeight,
		chartInnerWidth,
		innerLeft,
		innerTop,
	} = useDimensions()
	const { xScale } = useData()

	// Reference to the rendered group element
	const xAxisGroupEl = useRef()

	// Set the amount of ticks visible based on the amount of
	// text nodes that will fit the chart width.
	// TODO: This is based on the average length, assuming that all
	// text nodes are the same length. One long text node could cause overlap.
	const [tickCount, setTickCount] = useState(xAxisTickCount)
	useEffect(() => {
		if (xAxisGroupEl.current) {
			const averageTextNodeWidth = getAverageTextNodeWidth(
				xAxisGroupEl.current
			)

			const numberOfTicks = Math.floor(
				chartInnerWidth / averageTextNodeWidth
			)

			setTickCount(Math.min(numberOfTicks, xAxisTickCount))
		}
	}, [tickCount, chartInnerWidth])

	const ticks = xScale
		.ticks(tickCount)
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

	const labels = xScale.ticks(tickCount).map(tick => (
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
			aria-hidden
			ref={xAxisGroupEl}
		>
			{ticks}
			{labels}
		</g>
	)
}

export default ChartXAxis
