import React from "react"
/* eslint-disable no-console */
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import ChartContainer from "./index"
import figureContext from "../FigureContainer/figureContext"
import state from "../../state"
import data from "../utils/testData"

const yAxisFormat = format(",")
const xAxisFormat = str => str

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

storiesOf("Container|Chart", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => (
		<figureContext.Provider
			value={{
				...state,
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				yAxisFormat,
				xAxisFormat,
			}}
		>
			{story()}
		</figureContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <ChartContainer />)
