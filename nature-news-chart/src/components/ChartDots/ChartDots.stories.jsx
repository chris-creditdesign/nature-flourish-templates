import React from "react"
import { storiesOf } from "@storybook/react"
import { format as d3Format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Chart from "../Chart/index"
import ChartDots from "./index"
import chartContext from "../GraphicContainer/chartContext"
import state from "../../state"
import data from "../utils/testData"

const yAxisFormat = d3Format(",")
const xAxisFormat = str => str

storiesOf("Chart dots", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => (
		<chartContext.Provider
			value={{
				...state,
				data,
				yAxisFormat,
				xAxisFormat,
			}}
		>
			{story()}
		</chartContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Chart>
			<ChartDots index={0} />
		</Chart>
	))
	.add("multiple", () => (
		<Chart>
			<ChartDots index={0} />
			<ChartDots index={1} />
			<ChartDots index={2} />
			<ChartDots index={3} />
		</Chart>
	))
