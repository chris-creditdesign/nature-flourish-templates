import React from "react"
import PropTypes from "prop-types"
import ChartStackedBars from "../ChartStackedBars/index"

const ChartDataLayerStackedBars = ({
	chartInnerWidth,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	innerLeft,
	innerTop,
	stacked,
	xScale,
	yAxisFormat,
	yScale,
}) => {
	const rows = stacked.map((d, i) => {
		const { key } = d
		return (
			<g key={key}>
				<ChartStackedBars
					chartInnerWidth={chartInnerWidth}
					handleMouseEnterDataElem={
						handleMouseEnterDataElem
					}
					handleMouseLeaveDataElem={
						handleMouseLeaveDataElem
					}
					index={i}
					innerLeft={innerLeft}
					innerTop={innerTop}
					stacked={stacked}
					xScale={xScale}
					yAxisFormat={yAxisFormat}
					yScale={yScale}
				/>
			</g>
		)
	})

	return <g transform={`translate(${innerLeft},${innerTop})`}>{rows}</g>
}

export default ChartDataLayerStackedBars

ChartDataLayerStackedBars.propTypes = {
	chartInnerWidth: PropTypes.number.isRequired,
	handleMouseEnterDataElem: PropTypes.func.isRequired,
	handleMouseLeaveDataElem: PropTypes.func.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	stacked: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.array.isRequired)
	).isRequired,
	xScale: PropTypes.func.isRequired,
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}
