import React from "react"
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { scaleLinear } from "d3-scale"

import ChartSVG from "../ChartSVG/index"
import ChartYAxisBaseline from "./index"

const yAxisFormat = format(",")

const yScale = scaleLinear()
	.domain([0, 600])
	.range([260, 0])

storiesOf("Presentational|Chart/Components/Y-axis/Baseline", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartYAxisBaseline
				chartInnerWidth={500}
				innerLeft={50}
				innerTop={20}
				yAxisFormat={yAxisFormat}
				yAxisTickCount={5}
				yScale={yScale}
			/>
		</ChartSVG>
	))
