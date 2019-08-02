/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import ChartContainer from "./index"
import figureContext from "../FigureContainer/figureContext"
import data from "../utils/testData"
import data2 from "../utils/testData-2"
import state from "../../state"

const {
	chartType,
	xAxisTickCount,
	yAxisLegendText,
	yAxisTickCount,
	chartInnerMargin,
	chartMargin,
	height,
} = state

const yAxisFormat = format(",")
const xAxisFormat = str => str

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

storiesOf("Container|Chart", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("line", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType,
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("bar", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "verticalBarChart",
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("bar - data 2", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "verticalBarChart",
				data: data2,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("grouped bar", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "groupedBarChart",
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("grouped bar - data 2", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "groupedBarChart",
				data: data2,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("stacked bar", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "stackedBarChart",
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
	.add("stacked bar - data 2", () => (
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType: "stackedBarChart",
				data: data2,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				height,
				width: 600,
				xAxisFormat,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth: 0,
			}}
		>
			<ChartContainer />
		</figureContext.Provider>
	))
