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

	// SET UP THE USESTATE HOOK FOR WIDTH
	const [width, setWidth] = useState(window.innerWidth)

	// If the window/iframe changes width, change the
	// width of the graphic
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
		}

		window.addEventListener("resize", handleResize)

		return function cleanUpResize() {
			window.removeEventListener("resize", handleResize)
		}
	})

	// SET UP THE USESTATE HOOK FOR PAGEHEIGHT
	// Note: this is different to settings.height as there may be elemenst on the
	// page, such as a h1 tag, that are separate to the svg height
	const [pageHeight, setPageHeight] = useState(document.body.offsetHeight)

	const [requestData, setRequestData] = useState({})
	// Send the height of the rendered page to the host iframe
	// so that it can set itself to the correct height to display the graphic.
	useEffect(() => {
		const listener = (event) => {
			// stop the ResizeObserver triggering a message
			if (event.origin !== document.location.origin) {
				setPageHeight(document.body.offsetHeight)
				setRequestData(event.data)

				console.log(`useEffect pageHeight: ${pageHeight} requestData: ${requestData}`)
				window.parent.postMessage({ pageHeight, requestData }, "*")
			}
		}

		window.addEventListener('message', listener)

		return function cleanUpMessage() {
			window.removeEventListener("message", listener)
		}

	})

	return (
		<ThemeProvider theme={theme}>
			<chartContext.Provider
				value={{
					...settings,
					data,
					width,
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
