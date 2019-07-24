/* eslint-disable no-console */
import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear } from "d3-scale"
import { format } from "d3-format"

import ChartSVG from "../ChartSVG/index"
import ChartDataLayerLine from "./index"

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

const xScale = scaleLinear()
	.domain([2008, 2019])
	.range([0, 540])

const yScale = scaleLinear()
	.domain([0, 4000])
	.range([240, 0])

const handleMouseEnterDataElem = () => console.log("handleMouseEnterDataElem")
const handleMouseLeaveDataElem = () => console.log("handleMouseLeaveDataElem")

storiesOf("Presentational|Chart/Components/Data layer", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("line", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartDataLayerLine
				chartInnerWidth={560}
				columnNames={data.data.column_names.values}
				data={dataAsNumbers}
				handleMouseEnterDataElem={
					handleMouseEnterDataElem
				}
				handleMouseLeaveDataElem={
					handleMouseLeaveDataElem
				}
				innerLeft={20}
				innerTop={20}
				xScale={xScale}
				yAxisFormat={yAxisFormat}
				yScale={yScale}
			/>
		</ChartSVG>
	))
