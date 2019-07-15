import React, { useState, useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import { ThemeProvider } from "emotion-theming"
import { format as d3Format } from "d3-format"
import StyledFigure from "./styles"
import Header from "../Header/index"
import Key from "../Key/index"
import Tooltip from "../Tooltip/index"
import Chart from "../Chart/index"
import ChartBackgroundBox from "../ChartBackgroundBox/index"
import theme from "../utils/theme"
import ChartDataTableLine from "../ChartDataTableLine/index"
import ChartXAxis from "../ChartXAxis/index"
import ChartYAxis from "../ChartYAxis/index"
import ChartYAxisLegend from "../ChartYAxisLegend/index"
import chartContext from "./chartContext"
import Table from "../Table/index"
import ToggleButton from "../ToggleButton/index"

const GraphicContainer = ({ settings, data }) => {
	/* -------------------------------------------------------------------------- */
	/*                                  SETTINGS                                  */
	/* -------------------------------------------------------------------------- */
	const { headLine, standFirst } = settings

	/* -------------------------------------------------------------------------- */
	/*                      CHART AXIS TEXT FORMAT FUNCTIONS                      */
	/* -------------------------------------------------------------------------- */

	// TODO: Axis: These should be set up externally and suppiled to the chart container
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

	/* ------------------------------ Tooltip State ----------------------------- */
	const [tooltipState, setTooltipState] = useState({
		visible: false,
		x: 100,
		y: 100,
		alignment: "middle-bottom",
		value: "",
	})

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

	/* -------------------------------------------------------------------------- */
	/*                            Mouse over datapoint                            */
	/* -------------------------------------------------------------------------- */

	const handleMouseEnterDataElem = d => {
		setTooltipState({
			...tooltipState,
			x: d.x,
			y: d.y,
			value: d.value,
			alignment: d.alignment,
			visible: true,
		})
	}

	const handleMouseLeaveDataElem = () => {
		setTooltipState({
			...tooltipState,
			visible: false,
		})
	}

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

			<StyledFigure
				id="nature-graphic-figure"
				role="region"
				aria-live="polite"
			>
				<figcaption className="visually-hidden">
					{showChart
						? "Data displayed as a chart."
						: "Data displayed as a table."}
				</figcaption>
				<chartContext.Provider
					value={{
						...settings,
						data,
						width,
						yAxisFormat,
						xAxisFormat,
						handleMouseEnterDataElem,
						handleMouseLeaveDataElem,
					}}
				>
					{showChart ? (
						<Fragment>
							<CSSTransition
								in={
									tooltipState.visible
								}
								timeout={
									theme.transitionTime
								}
								classNames="tooltip"
								unmountOnExit
								appear
							>
								<Tooltip
									x={
										tooltipState.x
									}
									y={
										tooltipState.y
									}
									alignment={
										tooltipState.alignment
									}
								>
									<p>
										{
											tooltipState.value
										}
									</p>
								</Tooltip>
							</CSSTransition>
							<Chart>
								<ChartBackgroundBox />
								<ChartYAxisLegend />
								<ChartXAxis />
								<ChartYAxis />
								<ChartDataTableLine />
							</Chart>
						</Fragment>
					) : (
						<Table />
					)}
				</chartContext.Provider>
			</StyledFigure>

			<ToggleButton
				onClick={() => setShowChart(!showChart)}
				checked={!showChart}
				id="toggle-chart"
				label="Show data as table"
				disabled={false}
				controls="nature-graphic-figure"
			/>
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
