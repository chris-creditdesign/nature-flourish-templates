import React from "react"
import { storiesOf } from "@storybook/react"

import ChartSVG from "./index"

storiesOf("Presentational|Chart/Components/SVG", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<rect
				fill="none"
				strokeWidth="2px"
				stroke="red"
				x="1"
				y="1"
				height={298}
				width={598}
			/>
			<circle
				cx="150"
				cy="150"
				r="80"
				fill="none"
				strokeWidth="2px"
				stroke="green"
			/>
			<path
				d="M 300,125 L 400,50 L 500,100 L 400,250 Z"
				fill="none"
				strokeWidth="2px"
				stroke="blue"
			/>
			<text dy="2em" dx="2em">
				This is an SVG text element
			</text>
		</ChartSVG>
	))
