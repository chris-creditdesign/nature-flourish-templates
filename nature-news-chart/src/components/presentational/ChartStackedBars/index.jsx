import React, { useState } from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartStackedBars = ({
	chartInnerWidth,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	index,
	innerLeft,
	innerTop,
	stacked,
	xScale,
	yAxisFormat,
	yScale,
}) => {
	const [mouseOver, setMouseOver] = useState(null)

	const bandwith = xScale.bandwidth()
	const fill = theme.chartColor[index]

	const barData = stacked[index].map(d => {
		const { x } = d.data
		const [yStart, yEnd] = d
		return { x, yStart, yEnd }
	})

	const bars = barData.map((d, i) => {
		const scaledX = xScale(d.x)
		const scaledYStart = yScale(d.yStart)
		const scaledYEnd = yScale(d.yEnd)
		const opacity = i === mouseOver ? 0.6 : 1
		return (
			<rect
				key={`${d.x}-${d.yStart}-${d.yEnd}`}
				x={scaledX}
				y={scaledYEnd}
				height={scaledYStart - scaledYEnd}
				width={bandwith}
				fill={fill}
				opacity={opacity}
				onMouseEnter={() => {
					const x =
						scaledX +
						innerLeft +
						bandwith / 2
					const y = scaledYEnd + innerTop
					const value = yAxisFormat(
						d.yEnd - d.yStart
					)
					let alignment = "middle-bottom"

					if (scaledX < chartInnerWidth * 0.1) {
						alignment = "left-bottom"
					}

					if (scaledX > chartInnerWidth * 0.9) {
						alignment = "right-bottom"
					}

					handleMouseEnterDataElem({
						x,
						y,
						value,
						alignment,
					})
					setMouseOver(i)
				}}
				onMouseLeave={() => {
					handleMouseLeaveDataElem()
					setMouseOver(null)
				}}
			/>
		)
	})

	return <g>{bars}</g>
}

export default ChartStackedBars

ChartStackedBars.propTypes = {
	chartInnerWidth: PropTypes.number.isRequired,
	handleMouseEnterDataElem: PropTypes.func.isRequired,
	handleMouseLeaveDataElem: PropTypes.func.isRequired,
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	stacked: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.array.isRequired)
	).isRequired,
	xScale: PropTypes.func.isRequired,
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}
