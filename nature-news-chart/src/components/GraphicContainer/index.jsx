import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "emotion-theming"

import FigureContainer from "../FigureContainer/index"
import Header from "../presentational/Header/index"
import Key from "../presentational/Key/index"
import theme from "../utils/theme"

import ToggleButton from "../presentational/ToggleButton/index"

const GraphicContainer = ({ settings, data }) => {
	/* -------------------------------------------------------------------------- */
	/*                                  SETTINGS                                  */
	/* -------------------------------------------------------------------------- */
	const { headLine, standFirst } = settings

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

			{showChart ? (
				<Key
					columnNames={data.data.map(
						elem => elem.key
					)}
					type="line"
				/>
			) : null}

			<main
				id="nature-graphic-figure"
				aria-labelledby="nature-graphic-figure-caption"
				aria-live="polite"
			>
				<FigureContainer
					data={data}
					settings={settings}
					showChart={showChart}
					width={width}
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
	settings: PropTypes.shape({
		headLine: PropTypes.string.isRequired,
		standFirst: PropTypes.string.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
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
