import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import { format as d3Format } from "d3-format"
import Header from "../Header/index"
import Chart from "../Chart/index"
import ChartBackgroundBox from "../ChartBackgroundBox/index"
import theme from "../utils/theme"
import ChartDataTableLine from "../ChartDataTableLine/index"
import ChartXAxis from "../ChartXAxis/index"
import ChartYAxis from "../ChartYAxis/index"
import ChartYAxisLegend from "../ChartYAxisLegend/index"
import chartContext from "./chartContext"
import Table from "../Table/index"
import Form from "../Form/index"
import FormToggleButtons from "../FormToggleButtons/index"

const ChartContainer = ({ settings, data }) => {
	/* -------------------------------------------------------------------------- */
	/*                                  SETTINGS                                  */
	/* -------------------------------------------------------------------------- */
	const { headLine, standFirst } = settings

	/* -------------------------------------------------------------------------- */
	/*                      CHART AXIS TEXT FORMAT FUNCTIONS                      */
	/* -------------------------------------------------------------------------- */

	// These should be set up externally and suppiled to the chart container
	// The type of axis depends on the chart type and the data being displayed...
	// ie time series or ordinal data.
	const yAxisFormat = d3Format(",")
	const xAxisFormat = str => str

	/* -------------------------------------------------------------------------- */
	/*                                    STATE                                   */
	/* -------------------------------------------------------------------------- */

	/* ---------------------------------- width --------------------------------- */

	// This is the container width used to build the dimensions for the chart.
	// Determined by the width of the iframe / window.
	const [width, setWidth] = useState(window.innerWidth)

	/* -------------------------------- showChart ------------------------------- */

	// Determine if a chart or a table should be shown.
	const [showChart, setShowChart] = useState(true)

	/* -------------------------------------------------------------------------- */
	/*                                   EFFECTS                                  */
	/* -------------------------------------------------------------------------- */

	/* -------------------------- Resize Event Listener ------------------------- */

	// If the window/iframe changes width, call `setWidth` to change the width of the graphic.
	// Only call if `width` changes.
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener("resize", handleResize)

		return function cleanUpResize() {
			window.removeEventListener("resize", handleResize)
		}
	}, [width])

	/* ------------------------------ Post Message ------------------------------ */

	// Send the height of the rendered page to the host window so that the iframe
	// can be set to the correct height to display the graphic.
	// This can run on each render.
	useEffect(() => {
		if (window.requestData) {
			const documentHeight = document.querySelector("body")
				.offsetHeight
			window.parent.postMessage(
				{
					height: documentHeight,
					requestData: window.requestData,
				},
				"*"
			)
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<Header headLine={headLine} standFirst={standFirst} />
			<Form>
				<FormToggleButtons
					disabled={false}
					id="chart-toggle-buttons"
					message="Display a chart or a table"
					onValueChange={value =>
						setShowChart(value)
					}
					value={showChart}
					valueFalseMessage="Table"
					valueTrueMessage="Chart"
				/>
			</Form>
			<chartContext.Provider
				value={{
					...settings,
					data,
					width,
					yAxisFormat,
					xAxisFormat,
				}}
			>
				{showChart ? (
					<Chart>
						<ChartBackgroundBox />
						<ChartYAxisLegend />
						<ChartXAxis />
						<ChartYAxis />
						<ChartDataTableLine />
					</Chart>
				) : (
					<Table />
				)}
			</chartContext.Provider>
		</ThemeProvider>
	)
}

export default ChartContainer

ChartContainer.propTypes = {
	settings: PropTypes.shape({
		headLine: PropTypes.string.isRequired,
		standFirst: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		chartMargin: PropTypes.shape({
			top: PropTypes.number.isRequired,
			right: PropTypes.number.isRequired,
			bottom: PropTypes.number.isRequired,
			left: PropTypes.number.isRequired,
		}),
		chartInnerMargin: PropTypes.shape({
			top: PropTypes.number.isRequired,
			right: PropTypes.number.isRequired,
			bottom: PropTypes.number.isRequired,
			left: PropTypes.number.isRequired,
		}),
		yAxisTickCount: PropTypes.number.isRequired,
		xAxisTickCount: PropTypes.number.isRequired,
		yAxisLegendText: PropTypes.string.isRequired,
		xAxisLegendText: PropTypes.string.isRequired,
	}).isRequired,
	data: PropTypes.shape({
		data: PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.string.isRequired,
				values: PropTypes.arrayOf(PropTypes.string)
					.isRequired,
			})
		).isRequired,
		column_names: PropTypes.shape({
			key: PropTypes.string.isRequired,
			values: PropTypes.arrayOf(PropTypes.string).isRequired,
		}),
	}).isRequired,
}
