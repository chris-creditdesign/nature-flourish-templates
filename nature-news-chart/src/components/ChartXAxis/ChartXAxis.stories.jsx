import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Chart from "../Chart/index"
import ChartXAxis from "./index"
import chartContext from "../utils/chartContext"
import chartProps from "../utils/chartProps"

storiesOf("Chart x-axis", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => (
		<chartContext.Provider
			value={{
				...chartProps,
			}}
		>
			{story()}
		</chartContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Chart>
			<ChartXAxis />
		</Chart>
	))
