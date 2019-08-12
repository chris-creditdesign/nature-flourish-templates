import React, { useContext } from "react"

import {
	ChartSVG,
	ChartBackgroundBox,
	ChartXAxisLinear,
	ChartXAxisBand,
	ChartYAxis,
	ChartYAxisBaseline,
	ChartDataLayerLine,
	ChartBars,
	ChartDataLayerGroupedBars,
	ChartDataLayerStackedBars,
} from "nature-graphic-components"

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

	const {
		data,
		columnNamesAsNumbers,
		columnNamesAsText,
		yScale,
		xScale,
		xScaleInternal,
		stacked,
	} = useData()

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
	} else if (
		chartType === "verticalBarChart" ||
		chartType === "groupedBarChart" ||
		chartType === "stackedBarChart"
	) {
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
				columnNames={columnNamesAsNumbers}
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
				columnNames={columnNamesAsText}
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
	} else if (chartType === "groupedBarChart") {
		dataLayer = (
			<ChartDataLayerGroupedBars
				chartInnerWidth={chartInnerWidth}
				chartInnerHeight={chartInnerHeight}
				columnNames={columnNamesAsText}
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
				xScaleInternal={xScaleInternal}
				yAxisFormat={yAxisFormat}
				yScale={yScale}
			/>
		)
	} else if (chartType === "stackedBarChart") {
		dataLayer = (
			<ChartDataLayerStackedBars
				chartInnerWidth={chartInnerWidth}
				handleMouseEnterDataElem={
					handleMouseEnterDataElem
				}
				handleMouseLeaveDataElem={
					handleMouseLeaveDataElem
				}
				innerLeft={innerLeft}
				innerTop={innerTop}
				stacked={stacked}
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
