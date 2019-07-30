import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import FigureContainer from "./index"
import state from "../../state"
import data from "../utils/testData"

const {
	chartInnerMargin,
	chartMargin,
	chartType,
	headLine,
	height,
	standFirst,
	xAxisLegendText,
	xAxisTickCount,
	yAxisLegendText,
	yAxisTickCount,
} = state

storiesOf("Container|Figure", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<FigureContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			width={600}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
			data={data}
			showChart
		/>
	))
	.add("bar", () => (
		<FigureContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="verticalBarChart"
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			width={600}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
			data={data}
			showChart
		/>
	))
	.add("grouped bar", () => (
		<FigureContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="groupedBarChart"
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			width={600}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
			data={data}
			showChart
		/>
	))
	.add("stacked bar", () => (
		<FigureContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="stackedBarChart"
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			width={600}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
			data={data}
			showChart
		/>
	))
	.add("table", () => (
		<FigureContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			width={600}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
			data={data}
			showChart={false}
		/>
	))
