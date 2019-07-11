import React from "react"
import { storiesOf } from "@storybook/react"
import { format as d3Format } from "d3-format"

import Chart from "../Chart/index"
import ChartDataTableLine from "./index"
import chartContext from "../GraphicContainer/chartContext"
import state from "../../state"
import data from "../utils/testData"

const yAxisFormat = d3Format(",")
const xAxisFormat = str => str

storiesOf("Sections|Chart/Components/Data table", module)
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
			<ChartDataTableLine />
		</Chart>
	))
