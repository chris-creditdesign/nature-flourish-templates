/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear, scaleBand } from "d3-scale"
import { format } from "d3-format"

import ChartSVG from "../ChartSVG/index"
import ChartDataLayerGroupedBars from "./index"
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

const columnNamesAsText = data.data.column_names.values
const keys = data.data.map(d => d.key)

const xScale = scaleBand()
	.domain(columnNamesAsText)
	.range([0, 540])
	.paddingInner(0.5)

const xScaleInternal = scaleBand()
	.domain(keys)
	.range([0, xScale.bandwidth()])
	.paddingInner(0.3)

const yScale = scaleLinear()
	.domain([0, 4000])
	.range([240, 0])

/* -------------------------------------------------------------------------- */
/*                                   DATA 2                                   */
/* -------------------------------------------------------------------------- */

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

const xScaleInternal2 = scaleBand()
	.domain(keys2)
	.range([0, xScale.bandwidth()])
	.paddingInner(0.3)

const yScale2 = scaleLinear()
	.domain([0, 10.5])
	.range([240, 0])

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

const barProps = {
	chartInnerWidth: 560,
	chartInnerHeight: 260,
	columnNames: columnNamesAsText,
	data: dataAsNumbers,
	handleMouseEnterDataElem,
	handleMouseLeaveDataElem,
	innerLeft: 20,
	innerTop: 20,
	xScale,
	xScaleInternal,
	yAxisFormat,
	yScale,
}

storiesOf("Presentational|Chart/Components/Data layer/Bars", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("grouped", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartDataLayerGroupedBars {...barProps} />
		</ChartSVG>
	))
	.add("grouped - alt data", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartDataLayerGroupedBars
				{...barProps}
				data={dataAsNumbers2}
				columnNames={columnNamesAsText2}
				xScale={xScale2}
				xScaleInternal={xScaleInternal2}
				yScale={yScale2}
			/>
		</ChartSVG>
	))
