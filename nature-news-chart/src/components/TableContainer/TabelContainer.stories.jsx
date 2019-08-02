import React from "react"
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Table from "./index"
import figureContext from "../FigureContainer/figureContext"
import state from "../../state"
import data from "../utils/testData"
import data2 from "../utils/testData-2"

const yAxisFormat = format(",")

storiesOf("Container|Table", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.add("default", () => (
		<figureContext.Provider
			value={{
				yAxisLegendText: state.yAxisLegendText,
				chartInnerMargin: state.chartInnerMargin,
				chartMargin: state.chartMargin,
				height: state.height,
				width: 600,
				data,
				yAxisFormat,
			}}
		>
			<Table />
		</figureContext.Provider>
	))
	.add("data 2", () => (
		<figureContext.Provider
			value={{
				yAxisLegendText: state.yAxisLegendText,
				chartInnerMargin: state.chartInnerMargin,
				chartMargin: state.chartMargin,
				height: state.height,
				width: 600,
				data: data2,
				yAxisFormat,
			}}
		>
			<Table />
		</figureContext.Provider>
	))
