/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear, scaleBand } from "d3-scale"
import { format } from "d3-format"

import ChartSVG from "../ChartSVG/index"
import ChartBars from "./index"
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

const xScale = scaleBand()
	.domain(data.data.column_names.values)
	.range([0, 540])
	.paddingInner(0.5)

const yScale = scaleLinear()
	.domain([0, 4000])
	.range([240, 0])

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

const barProps = {
	chartInnerWidth: 560,
	chartInnerHeight: 260,
	columnNames: data.data.column_names.values,
	data: dataAsNumbers,
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
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartBars {...barProps} />
		</ChartSVG>
	))
