/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear, scaleBand } from "d3-scale"
import { stack } from "d3-shape"
import { format } from "d3-format"

import ChartSVG from "../ChartSVG/index"
import ChartDataLayerStackedBars from "./index"
import data from "../../utils/testData"

const yAxisFormat = format(",")

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
	.domain(data.data.column_names.values)
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

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

const barProps = {
	chartInnerWidth: 560,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	innerLeft: 20,
	innerTop: 20,
	stacked,
	xScale,
	yAxisFormat,
	yScale,
}

storiesOf("Presentational|Chart/Components/Data layer/Bars", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("stacked", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartDataLayerStackedBars {...barProps} />
		</ChartSVG>
	))
