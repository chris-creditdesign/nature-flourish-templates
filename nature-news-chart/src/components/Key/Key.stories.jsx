import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Key from "./index"
import data from "../utils/testData"

storiesOf("Sections|Key", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Key columnNames={data.data.column_names.values} />
	))
