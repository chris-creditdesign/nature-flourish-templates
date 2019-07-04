import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"
import { format as d3Format } from "d3-format"
import Chart from "../Chart/index"
import ChartBackgroundBox from "../ChartBackgroundBox/index"
import theme from "../utils/theme"
import ChartDataTableLine from "../ChartDataTableLine/index"
import ChartXAxis from "../ChartXAxis/index"
import ChartYAxis from "../ChartYAxis/index"
import ChartYAxisLegend from "../ChartYAxisLegend/index"
import chartContext from "./chartContext"

const ChartContainer = ({ settings, data }) => {
	const yAxisFormat = d3Format(",")
	const xAxisFormat = str => str

	// SET UP THE STATE HOOKS FOR WIDTH AND HEIGHT
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}

		window.addEventListener("resize", handleResize)

		return function cleanup() {
			window.removeEventListener("resize", handleResize)
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<chartContext.Provider
				value={{
					...settings,
					data,
					width,
					height,
					yAxisFormat,
					xAxisFormat,
				}}
			>
				<Chart>
					<ChartBackgroundBox />
					<ChartYAxisLegend />
					<ChartXAxis />
					<ChartYAxis />
					<ChartDataTableLine />
				</Chart>
			</chartContext.Provider>
		</ThemeProvider>
	)
}

export default ChartContainer

ChartContainer.propTypes = {
	settings: PropTypes.shape({
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
		data: PropTypes.shape({
			data: PropTypes.arrayOf(
				PropTypes.shape({
					key: PropTypes.string.isRequired,
					values: PropTypes.arrayOf(
						PropTypes.string
					).isRequired,
				})
			).isRequired,
			column_names: PropTypes.shape({
				key: PropTypes.string.isRequired,
				values: PropTypes.arrayOf(PropTypes.string)
					.isRequired,
			}),
		}).isRequired,
	}).isRequired,
}
