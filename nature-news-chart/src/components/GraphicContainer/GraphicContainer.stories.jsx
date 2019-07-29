import React from "react"
import { storiesOf } from "@storybook/react"

import GraphicContainer from "./index"
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

storiesOf("Page|Graphic", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
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
	.add("grouped bar", () => (
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType="groupedBarChart"
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
