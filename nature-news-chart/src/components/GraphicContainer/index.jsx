import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"

import FigureContainer from "../FigureContainer/index"
import Header from "../presentational/Header/index"
import Key from "../presentational/Key/index"
import theme from "../utils/theme"

import ToggleButton from "../presentational/ToggleButton/index"

const GraphicContainer = ({
	chartInnerMargin,
	chartMargin,
	chartType,
	data,
	headLine,
	height,
	standFirst,
	xAxisLegendText,
	xAxisTickCount,
	yAxisLegendText,
	yAxisTickCount,
}) => {
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

	let keyType

	if (chartType === "lineChart") {
		keyType = "line"
	} else {
		keyType = "box"
	}

	let showKey = true

	if (chartType === "verticalBarChart") {
		showKey = false
	}

	return (
		<ThemeProvider theme={theme}>
			<Header headLine={headLine} standFirst={standFirst} />

			{showChart && showKey ? (
				<Key
					columnNames={data.data.map(
						elem => elem.key
					)}
					type={keyType}
				/>
			) : null}

			<main
				id="nature-graphic-figure"
				aria-labelledby="nature-graphic-figure-caption"
				aria-live="polite"
			>
				<FigureContainer
					chartInnerMargin={chartInnerMargin}
					chartMargin={chartMargin}
					chartType={chartType}
					data={data}
					headLine={headLine}
					height={height}
					showChart={showChart}
					standFirst={standFirst}
					width={width}
					xAxisLegendText={xAxisLegendText}
					xAxisTickCount={xAxisTickCount}
					yAxisLegendText={yAxisLegendText}
					yAxisTickCount={yAxisTickCount}
				/>

				<ToggleButton
					onClick={() => setShowChart(!showChart)}
					checked={!showChart}
					id="toggle-chart"
					label="Show data as table"
					disabled={false}
					controls="nature-graphic-figure"
				/>
			</main>
		</ThemeProvider>
	)
}

export default GraphicContainer

GraphicContainer.propTypes = {
	chartInnerMargin: PropTypes.shape({
		top: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
	}).isRequired,
	chartMargin: PropTypes.shape({
		top: PropTypes.number.isRequired,
		right: PropTypes.number.isRequired,
		bottom: PropTypes.number.isRequired,
		left: PropTypes.number.isRequired,
	}).isRequired,
	chartType: PropTypes.oneOf([
		"lineChart",
		"verticalBarChart",
		"groupedBarChart",
		"stackedBarChart",
	]).isRequired,
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
	headLine: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	standFirst: PropTypes.string.isRequired,
	xAxisLegendText: PropTypes.string.isRequired,
	xAxisTickCount: PropTypes.number.isRequired,
	yAxisLegendText: PropTypes.string.isRequired,
	yAxisTickCount: PropTypes.number.isRequired,
}
