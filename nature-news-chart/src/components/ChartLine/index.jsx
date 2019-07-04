import React from "react"
import PropTypes from "prop-types"
import { line } from "d3-shape"
import StyledPath from "./styles"
import useData from "../utils/useData"

const ChartLine = ({ index }) => {
	const { xScale, yScale, data, columnNames } = useData()

	const title = data[index].key

	const lineData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const path = line()
		.x(d => xScale(d.x))
		.y(d => yScale(d.y))

	return (
		<StyledPath index={index} d={path(lineData)} role="img">
			<title>{title}</title>
		</StyledPath>
	)
}

ChartLine.propTypes = {
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
}

export default ChartLine
