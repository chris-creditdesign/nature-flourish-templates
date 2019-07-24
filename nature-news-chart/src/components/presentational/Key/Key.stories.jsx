import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import Key from "./index"
import data from "../../utils/testData"

storiesOf("Presentational|Key", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Key columnNames={data.data.map(elem => elem.key)} type="box" />
	))
	.add("line", () => (
		<Key
			columnNames={data.data.map(elem => elem.key)}
			type="line"
		/>
	))
	.add("dot", () => (
		<Key columnNames={data.data.map(elem => elem.key)} type="dot" />
	))
