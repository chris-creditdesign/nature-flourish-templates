import React from "react"
import { storiesOf } from "@storybook/react"
import { format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Table from "./index"
import figureContext from "../FigureContainer/figureContext"
import state from "../../state"
import data from "../utils/testData"

const yAxisFormat = format(",")

storiesOf("Container|Table", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => (
		<figureContext.Provider
			value={{
				...state,
				data,
				yAxisFormat,
			}}
		>
			{story()}
		</figureContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <Table />)
