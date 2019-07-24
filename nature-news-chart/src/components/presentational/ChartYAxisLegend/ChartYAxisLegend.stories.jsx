import React from "react"
import { storiesOf } from "@storybook/react"

import ChartSVG from "../ChartSVG/index"
import ChartYAxisLegend from "./index"

storiesOf("Presentational|Chart/Components/Y-axis legend", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartYAxisLegend
				yAxisLegendText="Y Axis Legend text"
				chartInnerHeight={260}
				innerTop={20}
			/>
		</ChartSVG>
	))
