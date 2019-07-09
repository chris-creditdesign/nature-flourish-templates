import React from "react"
import { storiesOf } from "@storybook/react"

import Chart from "../Chart/index"
import ChartBackgroundBox from "./index"
import chartContext from "../GraphicContainer/chartContext"
import state from "../../state"

storiesOf("Chart background box", module)
	.addDecorator(story => (
		<chartContext.Provider
			value={{
				...state,
			}}
		>
			{story()}
		</chartContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Chart>
			<ChartBackgroundBox />
		</Chart>
	))
