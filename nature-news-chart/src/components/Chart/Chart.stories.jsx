import React from "react"
import { storiesOf } from "@storybook/react"
import { format as d3Format } from "d3-format"

import Chart from "./index"
import ChartBackgroundBox from "../ChartBackgroundBox/index"
import ChartDataTableLine from "../ChartDataTableLine/index"
import ChartXAxis from "../ChartXAxis/index"
import ChartYAxis from "../ChartYAxis/index"
import ChartYAxisLegend from "../ChartYAxisLegend/index"
import chartContext from "../GraphicContainer/chartContext"
import state from "../../state"
import data from "../utils/testData"

const yAxisFormat = d3Format(",")
const xAxisFormat = str => str

storiesOf("Chart", module)
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
			<ChartBackgroundBox />
			<ChartDataTableLine />
			<ChartXAxis />
			<ChartYAxis />
			<ChartYAxisLegend />
		</Chart>
	))
