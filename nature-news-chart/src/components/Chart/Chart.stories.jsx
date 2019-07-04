import React from "react"
import { storiesOf } from "@storybook/react"
// import { State, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Chart from "./index"
import ChartBackgroundBox from "../ChartBackgroundBox/index"
import ChartDataTableLine from "../ChartDataTableLine/index"
import ChartXAxis from "../ChartXAxis/index"
import ChartYAxis from "../ChartYAxis/index"
import ChartYAxisLegend from "../ChartYAxisLegend/index"
import chartContext from "../ChartContainer/chartContext"
import chartProps from "../utils/chartProps"

storiesOf("Chart", module)
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
			<ChartBackgroundBox />
			<ChartDataTableLine />
			<ChartXAxis />
			<ChartYAxis />
			<ChartYAxisLegend />
		</Chart>
	))

// import Table from "../Table/index"
// import FormToggleButtons from "../FormToggleButtons/index"

// export const toggelButtonsStore = new Store({
// 	value: true,
// })

// export const toggelButtonsProps = {
// 	disabled: false,
// 	id: "toggle-buttons",
// 	message: "View this data as:",
// 	valueFalseMessage: "Table",
// 	valueTrueMessage: "Chart",
// 	onValueChange: value => toggelButtonsStore.set({ value }),
// }

// const myTable = (
// 	<Table
// 		data={dateData}
// 		title={title}
// 		xAxisFormat={xAxisFormat}
// 		yAxisFormat={yAxisFormat}
// 	/>
// )

// storiesOf("Chart", module)
// 	.addDecorator(story => (
// 		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
// 	))
// 	.add("Line chart", () => (
// 		<div className="nature-graphic">{myChart}</div>
// 	))
// 	.add("with table option", () => (
// 		<State store={toggelButtonsStore}>
// 			{state => (
// 				<div className="nature-graphic">
// 					<FormToggleButtons
// 						{...toggelButtonsProps}
// 						value={state.value}
// 					/>
// 					{state.value ? myChart : myTable}
// 				</div>
// 			)}
// 		</State>
// 	))
