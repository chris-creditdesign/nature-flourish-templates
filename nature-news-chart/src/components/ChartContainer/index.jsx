import React, { useContext } from "react"

import ChartSVG from "../presentational/ChartSVG/index"
import ChartBackgroundBox from "../presentational/ChartBackgroundBox/index"
import ChartYAxisLegend from "../presentational/ChartYAxisLegend/index"
import ChartXAxisLinear from "../presentational/ChartXAxisLinear/index"
import ChartYAxis from "../presentational/ChartYAxis/index"
import ChartDataLayerLine from "../presentational/ChartDataLayerLine/index"

import figureContext from "../FigureContainer/figureContext"

import useDimensions from "../customHooks/useDimensions"
import useData from "../customHooks/useData"

const ChartContainer = () => {
	const {
		handleMouseEnterDataElem,
		handleMouseLeaveDataElem,
		independentVariableType,
		xAxisFormat,
		xAxisTickCount,
		yAxisFormat,
		yAxisLegendText,
		yAxisTickCount,
	} = useContext(figureContext)

	const {
		chartHeight,
		chartInnerHeight,
		chartInnerWidth,
		chartWidth,
		innerLeft,
		innerTop,
	} = useDimensions()

	const { data, columnNames, yScale, xScale } = useData()

	return (
		<ChartSVG chartWidth={chartWidth} chartHeight={chartHeight}>
			<ChartBackgroundBox
				chartInnerHeight={chartInnerHeight}
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
			/>
			<ChartYAxisLegend
				yAxisLegendText={yAxisLegendText}
				chartInnerHeight={chartInnerHeight}
				innerTop={innerTop}
			/>
			{independentVariableType === "linear" ? (
				<ChartXAxisLinear
					chartInnerHeight={chartInnerHeight}
					chartInnerWidth={chartInnerWidth}
					innerLeft={innerLeft}
					innerTop={innerTop}
					xAxisFormat={xAxisFormat}
					xAxisTickCount={xAxisTickCount}
					xScale={xScale}
				/>
			) : null}

			<ChartYAxis
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
				yAxisFormat={yAxisFormat}
				yAxisTickCount={yAxisTickCount}
				yScale={yScale}
			/>
			<ChartDataLayerLine
				chartInnerWidth={chartInnerWidth}
				columnNames={columnNames}
				data={data}
				handleMouseEnterDataElem={
					handleMouseEnterDataElem
				}
				handleMouseLeaveDataElem={
					handleMouseLeaveDataElem
				}
				innerLeft={innerLeft}
				innerTop={innerTop}
				xScale={xScale}
				yAxisFormat={yAxisFormat}
				yScale={yScale}
			/>
		</ChartSVG>
	)
}

export default ChartContainer
