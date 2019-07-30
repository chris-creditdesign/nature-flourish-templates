import React, { useState } from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartDots = ({
	chartInnerWidth,
	columnNames,
	data,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	index,
	innerLeft,
	innerTop,
	xScale,
	yAxisFormat,
	yScale,
}) => {
	const [mouseOver, setMouseOver] = useState(null)

	const dotData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const circles = dotData.map((d, i) => {
		const scaledX = xScale(d.x)
		const scaledY = yScale(d.y)
		const radius =
			i === mouseOver ? theme.dotRadius.l : theme.dotRadius.s
		return (
			<circle
				key={`${d.y}-${d.x}`}
				cx={scaledX}
				cy={scaledY}
				r={radius}
				fill={theme.chartColor[index]}
				index={index}
				onMouseEnter={() => {
					const x = scaledX + innerLeft
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

	return <g>{circles}</g>
}

export default ChartDots

ChartDots.propTypes = {
	chartInnerWidth: PropTypes.number.isRequired,
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
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}