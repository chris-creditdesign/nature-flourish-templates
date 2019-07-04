import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Table from "./index"
import chartContext from "../utils/chartContext"
import chartProps from "../utils/chartProps"

storiesOf("Table", module)
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
	.add("default", () => <Table />)
