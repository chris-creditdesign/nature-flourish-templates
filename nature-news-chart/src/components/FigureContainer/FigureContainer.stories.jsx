import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import FigureContainer from "./index"
import state from "../../state"
import data from "../utils/testData"

storiesOf("Container|Figure", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<FigureContainer
			data={data}
			settings={state}
			showChart
			width={600}
		/>
	))
	.add("as table", () => (
		<FigureContainer
			data={data}
			settings={state}
			showChart={false}
			width={600}
		/>
	))
