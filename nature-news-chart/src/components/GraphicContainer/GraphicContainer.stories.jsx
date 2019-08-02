import React from "react"
import { storiesOf } from "@storybook/react"

import GraphicContainer from "./index"
import state from "../../state"
import data from "../utils/testData"
import data2 from "../utils/testData-2"

const {
	chartInnerMargin,
	chartMargin,
	chartType,
	footnoteText,
	headLine,
	height,
	standFirst,
	xAxisLegendText,
	xAxisTickCount,
	yAxisLegendText,
	yAxisTickCount,
} = state

storiesOf("Page|Graphic", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("line", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("bar", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="verticalBarChart"
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("bar - data 2", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="verticalBarChart"
			footnoteText={footnoteText}
			data={data2}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("grouped bar", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="groupedBarChart"
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("grouped bar - data 2", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="groupedBarChart"
			footnoteText={footnoteText}
			data={data2}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("stacked bar", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="stackedBarChart"
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("stacked bar - data 2", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="stackedBarChart"
			footnoteText={footnoteText}
			data={data2}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
