/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear, scaleBand } from "d3-scale"
import { stack } from "d3-shape"
import { format } from "d3-format"

import ChartSVG from "../ChartSVG/index"
import ChartStackedBars from "./index"
import data from "../../utils/testData"
import data2 from "../../utils/testData-2"

const yAxisFormat = format(",")

/* -------------------------------------------------------------------------- */
/*                                   DATA 1                                   */
/* -------------------------------------------------------------------------- */

// 1. Covert each of the values to numbers
const dataAsNumbers = data.data.map(obj => {
	const { key, values } = obj
	const numberValues = values.map(str => parseFloat(str))
	return {
		key,
		values: numberValues,
	}
})

const keys = data.data.map(d => d.key)
const columnNamesAsText = data.data.column_names.values

const xScale = scaleBand()
	.domain(columnNamesAsText)
	.range([0, 540])
	.paddingInner(0.5)

const yScale = scaleLinear()
	.domain([0, 16000])
	.range([240, 0])

const dataToBeStacked = columnNamesAsText.map((d, i) => {
	const result = {}
	result.x = d

	keys.forEach(key => {
		const foundData = dataAsNumbers.find(k => k.key === key)
		result[key] = foundData.values[i]
	})
	return result
})

const stacker = stack().keys(keys)

const stacked = stacker(dataToBeStacked)

/* -------------------------------------------------------------------------- */
/*                                   DATA 2                                   */
/* -------------------------------------------------------------------------- */

// 1. Covert each of the values to numbers
const dataAsNumbers2 = data2.data.map(obj => {
	const { key, values } = obj
	const numberValues = values.map(str => parseFloat(str))
	return {
		key,
		values: numberValues,
	}
})

const keys2 = data2.data.map(d => d.key)
const columnNamesAsText2 = data2.data.column_names.values

const xScale2 = scaleBand()
	.domain(columnNamesAsText2)
	.range([0, 540])
	.paddingInner(0.5)

const yScale2 = scaleLinear()
	.domain([0, 10.5])
	.range([240, 0])

const dataToBeStacked2 = columnNamesAsText2.map((d, i) => {
	const result = {}
	result.x = d

	keys2.forEach(key => {
		const foundData = dataAsNumbers2.find(k => k.key === key)
		result[key] = foundData.values[i]
	})
	return result
})

const stacker2 = stack().keys(keys2)

const stacked2 = stacker2(dataToBeStacked2)

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

const barProps = {
	chartInnerWidth: 560,
	chartInnerHeight: 260,
	columnNames: data.data.column_names.values,
	data: dataAsNumbers,
	stacked,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	index: 0,
	innerLeft: 20,
	innerTop: 20,
	xScale,
	yAxisFormat,
	yScale,
}

storiesOf("Presentational|Chart/Components/Bars", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("stacked", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartStackedBars {...barProps} />
		</ChartSVG>
	))
	.add("stacked - alt data", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartStackedBars
				{...barProps}
				data={dataAsNumbers2}
				stacked={stacked2}
				xScale={xScale2}
				yScale={yScale2}
			/>
		</ChartSVG>
	))
