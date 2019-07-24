import React from "react"
import { storiesOf } from "@storybook/react"

import ChartSVG from "../ChartSVG/index"
import ChartBackgroundBox from "./index"

storiesOf("Presentational|Chart/Components/Background box", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<ChartSVG chartHeight={300} chartWidth={600}>
			<ChartBackgroundBox
				chartInnerHeight={260}
				chartInnerWidth={560}
				innerLeft={20}
				innerTop={20}
			/>
		</ChartSVG>
	))
