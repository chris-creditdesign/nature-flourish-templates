import React from "react"
import PropTypes from "prop-types"
import ChartLine from "../ChartLine/index"
import ChartDots from "../ChartDots/index"

const ChartDataLayerLine = ({
	chartInnerWidth,
	columnNames,
	data,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	innerLeft,
	innerTop,
	xScale,
	yAxisFormat,
	yScale,
}) => {
	const rows = data.map((d, i) => {
		const { key } = d
		return (
			<g key={key}>
				<ChartLine
					columnNames={columnNames}
					data={data}
					index={i}
					xScale={xScale}
					yScale={yScale}
				/>
				<ChartDots
					chartInnerWidth={chartInnerWidth}
					columnNames={columnNames}
					data={data}
					handleMouseEnterDataElem={
						handleMouseEnterDataElem
					}
					handleMouseLeaveDataElem={
						handleMouseLeaveDataElem
					}
					index={i}
					innerLeft={innerLeft}
					innerTop={innerTop}
					xScale={xScale}
					yAxisFormat={yAxisFormat}
					yScale={yScale}
				/>
			</g>
		)
	})

	return <g transform={`translate(${innerLeft},${innerTop})`}>{rows}</g>
}

export default ChartDataLayerLine

ChartDataLayerLine.propTypes = {
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
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	xScale: PropTypes.func.isRequired,
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}
