import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import theme from "../utils/theme"
import useData from "../utils/useData"
import chartContext from "../GraphicContainer/chartContext"

const ChartDots = ({ index }) => {
	const [mouseOver, setMouseOver] = useState(null)
	const { yAxisFormat } = useContext(chartContext)
	const { xScale, yScale, data, columnNames } = useData()

	const dotData = data[index].values.map((d, i) => {
		const x = columnNames[i]
		const y = d
		return { x, y }
	})

	const circles = dotData.map((d, i) => (
		<circle
			key={`${d.y}-${d.x}`}
			cx={xScale(d.x)}
			cy={yScale(d.y)}
			r={
				i === mouseOver
					? theme.dotRadius.l
					: theme.dotRadius.s
			}
			fill={theme.chartColor[index]}
			index={index}
			role="img"
			onMouseEnter={() => setMouseOver(i)}
			onMouseLeave={() => setMouseOver(null)}
		>
			<title>{yAxisFormat(d.y)}</title>
		</circle>
	))

	return <g role="cell">{circles}</g>
}

ChartDots.propTypes = {
	/** Used to select data range and apply a stroke color */
	index: PropTypes.number.isRequired,
}

export default ChartDots
