import React from "react"
import PropTypes from "prop-types"
import ChartGroupedBars from "../ChartGroupedBars/index"

const ChartDataLayerLine = ({
	chartInnerWidth,
	chartInnerHeight,
	columnNames,
	data,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	innerLeft,
	innerTop,
	xScale,
	xScaleInternal,
	yAxisFormat,
	yScale,
}) => {
	const rows = data.map((d, i) => {
		const { key } = d
		return (
			<g key={key}>
				<ChartGroupedBars
					chartInnerWidth={chartInnerWidth}
					chartInnerHeight={chartInnerHeight}
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
					xScaleInternal={xScaleInternal}
					yAxisFormat={yAxisFormat}
					yScale={yScale}
				/>
			</g>
		)
	})

	return <g>{rows}</g>
}

export default ChartDataLayerLine

ChartDataLayerLine.propTypes = {
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
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
	xScale: PropTypes.func.isRequired,
	xScaleInternal: PropTypes.func.isRequired,
	yAxisFormat: PropTypes.func.isRequired,
	yScale: PropTypes.func.isRequired,
}
