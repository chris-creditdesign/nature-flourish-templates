import React from "react"
import { storiesOf } from "@storybook/react"
import { format as d3Format } from "d3-format"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import Table from "./index"
import data from "../../utils/testData"

const yAxisFormat = d3Format(",")

storiesOf("Presentational|Table", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<Table
			columnNames={data.data.column_names.values}
			data={data.data}
			yAxisFormat={yAxisFormat}
			yAxisLegendText="Y Axis Legend Text"
		/>
	))
