import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear } from "d3-scale"

import ChartSVG from "../ChartSVG/index"
import ChartLine from "./index"

import data from "../../utils/testData"

// 1. Covert each of the values to numbers
const dataAsNumbers = data.data.map(obj => {
	const { key, values } = obj
	const numberValues = values.map(str => parseFloat(str))
	return {
		key,
		values: numberValues,
	}
})

const xScale = scaleLinear()
	.domain([2008, 2019])
	.range([0, 540])

const yScale = scaleLinear()
	.domain([0, 4500])
	.range([240, 0])

const lineProps = {
	columnNames: data.data.column_names.values,
	data: dataAsNumbers,
	index: 0,
	xScale,
	yScale,
}

storiesOf("Presentational|Chart/Components/Line", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartLine {...lineProps} />
		</ChartSVG>
	))
	.add("multiple", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartLine {...lineProps} />
			<ChartLine {...lineProps} index={1} />
			<ChartLine {...lineProps} index={2} />
			<ChartLine {...lineProps} index={3} />
			<ChartLine {...lineProps} index={4} />
		</ChartSVG>
	))
