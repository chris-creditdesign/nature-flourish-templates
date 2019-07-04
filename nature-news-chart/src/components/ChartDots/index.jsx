import React, { useContext } from "react"
import PropTypes from "prop-types"
import StyledCircle from "./styles"
import useData from "../utils/useData"
import chartContext from "../ChartContainer/chartContext"

const ChartDots = ({ index }) => {
	const { yAxisFormat } = useContext(chartContext)
	const { xScale, yScale, data, columnNames } = useData()

	const dotData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const circles = dotData.map(d => (
		<StyledCircle
			key={`${d.y}-${d.x}`}
			cx={xScale(d.x)}
			cy={yScale(d.y)}
			index={index}
			role="img"
		>
			<title>{yAxisFormat(d.y)}</title>
		</StyledCircle>
	))

	return <g role="cell">{circles}</g>
}

ChartDots.propTypes = {
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
}

export default ChartDots
