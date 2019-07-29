import React, { useContext } from "react"

import ChartSVG from "../presentational/ChartSVG/index"
import ChartBackgroundBox from "../presentational/ChartBackgroundBox/index"
import ChartYAxisLegend from "../presentational/ChartYAxisLegend/index"
import ChartXAxisLinear from "../presentational/ChartXAxisLinear/index"
import ChartXAxisBand from "../presentational/ChartXAxisBand/index"
import ChartYAxis from "../presentational/ChartYAxis/index"
import ChartYAxisBaseline from "../presentational/ChartYAxisBaseline/index"
import ChartDataLayerLine from "../presentational/ChartDataLayerLine/index"
import ChartBars from "../presentational/ChartBars/index"

import figureContext from "../FigureContainer/figureContext"

import useDimensions from "../customHooks/useDimensions"
import useData from "../customHooks/useData"

const ChartContainer = () => {
	const {
		chartType,
		handleMouseEnterDataElem,
		handleMouseLeaveDataElem,
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

	let xAxis

	if (chartType === "lineChart") {
		xAxis = (
			<ChartXAxisLinear
				chartInnerHeight={chartInnerHeight}
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
				xAxisFormat={xAxisFormat}
				xAxisTickCount={xAxisTickCount}
				xScale={xScale}
			/>
		)
	} else if (chartType === "verticalBarChart") {
		xAxis = (
			<ChartXAxisBand
				chartInnerHeight={chartInnerHeight}
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
				xAxisFormat={xAxisFormat}
				xScale={xScale}
			/>
		)
	}

	let dataLayer

	if (chartType === "lineChart") {
		dataLayer = (
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
		)
	} else if (chartType === "verticalBarChart") {
		dataLayer = (
			<ChartBars
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
				index={0}
				innerLeft={innerLeft}
				innerTop={innerTop}
				xScale={xScale}
				yAxisFormat={yAxisFormat}
				yScale={yScale}
			/>
		)
	}

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

			{xAxis}

			<ChartYAxis
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
				yAxisFormat={yAxisFormat}
				yAxisTickCount={yAxisTickCount}
				yScale={yScale}
			/>

			{dataLayer}

			<ChartYAxisBaseline
				chartInnerWidth={chartInnerWidth}
				innerLeft={innerLeft}
				innerTop={innerTop}
				yAxisFormat={yAxisFormat}
				yAxisTickCount={yAxisTickCount}
				yScale={yScale}
			/>
		</ChartSVG>
	)
}

export default ChartContainer
