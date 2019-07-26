import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const widthReducer = (accumulator, currentValue) => {
	const { width } = currentValue.getBBox()
	return accumulator + width
}

const getWidthOfTextNodes = (elem, settings = { padding: 20 }) => {
	const textNodes = elem.getElementsByTagName("text")
	const textNodesArray = Array.from(textNodes)
	const textWidth = textNodesArray.reduce(widthReducer, 0)

	const textWidthPlusPadding =
		textWidth + settings.padding * textNodesArray.length

	return parseInt(textWidthPlusPadding, 10)
}

const ChartXAxisBand = ({
	chartInnerHeight,
	chartInnerWidth,
	innerLeft,
	innerTop,
	xAxisFormat,
	xScale,
}) => {
	const bandwidth = xScale.bandwidth()

	// Reference to the rendered group element
	const xAxisGroupEl = useRef()

	// Get the width of the maximum amount of text nodes.
	// This effect should only run the initial render
	const widthOfTextNodes = useRef(0)
	useEffect(() => {
		if (xAxisGroupEl.current) {
			widthOfTextNodes.current = getWidthOfTextNodes(
				xAxisGroupEl.current
			)
		}
	}, [])

	// Set the amount of ticks visible based on the amount of
	// text nodes that will fit the chart width.
	// TODO: This is based on the average length, assuming that all
	// text nodes are the same length. One long text node could cause overlap.
	const [
		textWidthExceedsChartInnerWidth,
		setTextWidthExceedsChartInnerWidth,
	] = useState(false)
	useEffect(() => {
		setTextWidthExceedsChartInnerWidth(
			widthOfTextNodes.current > chartInnerWidth
		)
	}, [chartInnerWidth])

	const ticks = xScale
		.domain()
		.map(tick => (
			<line
				key={tick}
				x1={xScale(tick) + bandwidth / 2}
				y1={0}
				x2={xScale(tick) + bandwidth / 2}
				y2="0.5em"
				stroke={theme.color.line}
				strokeWidth={theme.strokeWidth.s}
				shapeRendering="crispEdges"
				strokeDasharray="none"
			/>
		))

	const labels = xScale
		.domain()
		.filter((tick, i) => {
			if (textWidthExceedsChartInnerWidth) {
				// Just return the even ticks
				return !(i % 2)
			}
			// Otherwise return all ticks
			return true
		})
		.map(tick => (
			<text
				key={tick}
				x={xScale(tick) + bandwidth / 2}
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
			ref={xAxisGroupEl}
		>
			{ticks}
			{labels}
		</g>
	)
}

export default ChartXAxisBand

ChartXAxisBand.propTypes = {
	chartInnerHeight: PropTypes.number.isRequired,
	chartInnerWidth: PropTypes.number.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	xAxisFormat: PropTypes.func.isRequired,
	xScale: PropTypes.func.isRequired,
}
