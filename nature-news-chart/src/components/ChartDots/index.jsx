import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import theme from "../utils/theme"
import useData from "../utils/useData"
import useDimensions from "../utils/useDimensions"
import chartContext from "../GraphicContainer/chartContext"

const ChartDots = ({ index }) => {
	const [mouseOver, setMouseOver] = useState(null)
	const {
		yAxisFormat,
		handleMouseEnterDataElem,
		handleMouseLeaveDataElem,
	} = useContext(chartContext)
	const { xScale, yScale, data, columnNames } = useData()
	const { innerLeft, innerTop, chartInnerWidth } = useDimensions()

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
				role="img"
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
			>
				<title>{yAxisFormat(d.y)}</title>
			</circle>
		)
	})

	return <g role="cell">{circles}</g>
}

ChartDots.propTypes = {
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
}

export default ChartDots
