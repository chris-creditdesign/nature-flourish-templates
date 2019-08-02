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
	sourceText,
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
			sourceText={sourceText}
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
			sourceText={sourceText}
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
			sourceText={sourceText}
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
			sourceText={sourceText}
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
			sourceText={sourceText}
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
			sourceText={sourceText}
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
			sourceText={sourceText}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("long footnote", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			footnoteText="*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			data={data}
			headLine={headLine}
			height={height}
			sourceText={sourceText}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("long source", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			sourceText="<strong>Lorem ipsum dolor</strong> sit amet, <i>Nature</i> adipisicing elit, sed do eiusmod tempor incididunt ut <a href='http://www.nature.com'>nature.com</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>
	))
	.add("axis labels with line breaks", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			sourceText={sourceText}
			standFirst={standFirst}
			xAxisLegendText="Lorem ipsum dolor sit amet,<br />consectetur adipisicing elit<br />sed do eiusmod tempor incididunt ut labore<br />"
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText="Lorem ipsum dolor sit amet,<br />consectetur adipisicing elit<br />sed do eiusmod tempor incididunt ut labore<br />"
			yAxisTickCount={yAxisTickCount}
		/>
	))
