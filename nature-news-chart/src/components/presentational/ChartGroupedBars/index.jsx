import React, { useState } from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartGroupedBars = ({
	chartInnerWidth,
	chartInnerHeight,
	columnNames,
	data,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	index,
	innerLeft,
	innerTop,
	xScale,
	xScaleInternal,
	yAxisFormat,
	yScale,
}) => {
	const [mouseOver, setMouseOver] = useState(null)

	const { key } = data[index]
	const internalPosition = xScaleInternal(key)
	const internalBandwith = xScaleInternal.bandwidth()
	const fill = theme.chartColor[index]

	const barData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const bars = barData.map((d, i) => {
		const scaledX = xScale(d.x) + internalPosition
		const scaledY = yScale(d.y)
		const opacity = i === mouseOver ? 0.6 : 1
		return (
			<rect
				key={`${d.x}-${d.y}`}
				x={scaledX}
				y={scaledY}
				height={chartInnerHeight - scaledY}
				width={internalBandwith}
				fill={fill}
				opacity={opacity}
				onMouseEnter={() => {
					const x =
						scaledX +
						innerLeft +
						internalBandwith / 2
					const y = scaledY + innerTop
					const value = yAxisFormat(d.y)
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

	return <g transform={`translate(${innerLeft},${innerTop})`}>{bars}</g>
}

export default ChartGroupedBars

ChartGroupedBars.propTypes = {
	chartInnerWidth: PropTypes.number.isRequired,
	chartInnerHeight: PropTypes.number.isRequired,
	columnNames: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			values: PropTypes.array,
		})
	).isRequired,
	handleMouseEnterDataElem: PropTypes.func.isRequired,
	handleMouseLeaveDataElem: PropTypes.func.isRequired,
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	xScale: PropTypes.func.isRequired,
	xScaleInternal: PropTypes.func.isRequired,
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}
