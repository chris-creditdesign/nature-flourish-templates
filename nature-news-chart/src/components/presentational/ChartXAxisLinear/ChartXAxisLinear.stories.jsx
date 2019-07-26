import React from "react"
import { storiesOf } from "@storybook/react"
import { scaleLinear } from "d3-scale"

import ChartSVG from "../ChartSVG/index"
import ChartXAxisLinear from "./index"

const xAxisFormat = str => str

const xScale = scaleLinear()
	.domain([0, 500])
	.range([0, 560])

storiesOf("Presentational|Chart/Components/X-axis/Linear", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartXAxisLinear
				chartInnerHeight={220}
				chartInnerWidth={560}
				innerLeft={20}
				innerTop={20}
				xAxisFormat={xAxisFormat}
				xAxisTickCount={10}
				xScale={xScale}
			/>
		</ChartSVG>
	))
