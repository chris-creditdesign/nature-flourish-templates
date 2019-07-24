import React from "react"
import PropTypes from "prop-types"
import { line } from "d3-shape"
import theme from "../../utils/theme"

const ChartLine = ({ columnNames, data, index, xScale, yScale }) => {
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
	columnNames: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			values: PropTypes.array,
		})
	).isRequired,
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
	xScale: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}

export default ChartLine
