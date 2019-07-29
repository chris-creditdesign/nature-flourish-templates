/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import ChartContainer from "./index"
import figureContext from "../FigureContainer/figureContext"
import data from "../utils/testData"
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
	.add("default", () => (
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
