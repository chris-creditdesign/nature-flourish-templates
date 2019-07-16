import React from "react"
import PropTypes from "prop-types"
import { line } from "d3-shape"
import theme from "../utils/theme"
import useData from "../utils/useData"

const ChartLine = ({ index }) => {
	const { xScale, yScale, data, columnNames } = useData()

	const lineData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const path = line()
		.x(d => xScale(d.x))
		.y(d => yScale(d.y))

	return (
		<path
			index={index}
			d={path(lineData)}
			fill="none"
			strokeWidth={theme.strokeWidth.xl}
			stroke={theme.chartColor[index]}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	)
}

ChartLine.propTypes = {
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
}

export default ChartLine
