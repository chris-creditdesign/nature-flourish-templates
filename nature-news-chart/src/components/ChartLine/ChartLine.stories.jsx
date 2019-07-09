import React from "react"
import { storiesOf } from "@storybook/react"

import Chart from "../Chart/index"
import ChartLine from "./index"
import chartContext from "../GraphicContainer/chartContext"
import state from "../../state"
import data from "../utils/testData"

storiesOf("Chart line", module)
	.addDecorator(story => (
		<chartContext.Provider
			value={{
				...state,
				data,
			}}
		>
			{story()}
		</chartContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Chart>
			<ChartLine index={0} />
		</Chart>
	))
	.add("multiple", () => (
		<Chart>
			<ChartLine index={0} />
			<ChartLine index={1} />
			<ChartLine index={2} />
			<ChartLine index={3} />
		</Chart>
	))
