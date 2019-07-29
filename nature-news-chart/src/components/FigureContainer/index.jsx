import React, { useState } from "react"
import PropTypes from "prop-types"
import { format } from "d3-format"

import StyledFigure from "../presentational/Figure/styles"
import ChartContainer from "../ChartContainer/index"
import TooltipContainer from "../TooltipContainer/index"
import TableContainer from "../TableContainer"
import figureContext from "./figureContext"
import useClientRect from "../customHooks/useClientRect"

const FigureContainer = ({
	chartInnerMargin,
	chartMargin,
	chartType,
	data,
	headLine,
	height,
	showChart,
	standFirst,
	width,
	xAxisLegendText,
	xAxisTickCount,
	yAxisLegendText,
	yAxisTickCount,
}) => {
	/* -------------------------------------------------------------------------- */
	/*                                Y-AXIS WIDTH                                */
	/* -------------------------------------------------------------------------- */

	// Create a ref for the y-axis p tag and use this to measure its width so that
	// that width can be taken away from the svg width in the useDimensions hook

	const [yAxisRect, yAxisRef] = useClientRect()
	let yAxisWidth = 0

	if (yAxisRect) {
		yAxisWidth = parseInt(yAxisRect.width, 10)
	}

	/* -------------------------------------------------------------------------- */
	/*                      CHART AXIS TEXT FORMAT FUNCTIONS                      */
	/* -------------------------------------------------------------------------- */

	// TODO: Axis: These should be set up externally and suppiled to the chart container
	// The type of axis depends on the chart type and the data being displayed...
	// ie time series or ordinal data.
	const yAxisFormat = format(",")
	const xAxisFormat = str => str

	/* ------------------------------ Tooltip State ----------------------------- */
	const [tooltipState, setTooltipState] = useState({
		visible: false,
		x: 100,
		y: 100,
		alignment: "middle-bottom",
		value: "",
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
		<figureContext.Provider
			value={{
				chartInnerMargin,
				chartMargin,
				chartType,
				data,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
				headLine,
				height,
				showChart,
				standFirst,
				tooltipState,
				width,
				xAxisFormat,
				xAxisLegendText,
				xAxisTickCount,
				yAxisFormat,
				yAxisLegendText,
				yAxisTickCount,
				yAxisWidth,
			}}
		>
			<StyledFigure>
				<figcaption
					className="visually-hidden"
					id="nature-graphic-figure-caption"
				>
					{showChart
						? "Data displayed as a chart."
						: "Data displayed as a table."}
				</figcaption>
				{showChart ? (
					<div
						className="figure-grid-container"
						aria-hidden
					>
						<p
							className="y-axis"
							ref={yAxisRef}
						>
							{yAxisLegendText}
						</p>
						<div className="figure-chart-tooltip-container">
							<TooltipContainer />
							<ChartContainer />
						</div>
						<p className="x-axis">
							{xAxisLegendText}
						</p>
					</div>
				) : (
					<TableContainer />
				)}
			</StyledFigure>
		</figureContext.Provider>
	)
}

export default FigureContainer

FigureContainer.propTypes = {
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
	showChart: PropTypes.bool.isRequired,
	standFirst: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	xAxisLegendText: PropTypes.string.isRequired,
	xAxisTickCount: PropTypes.number.isRequired,
	yAxisLegendText: PropTypes.string.isRequired,
	yAxisTickCount: PropTypes.number.isRequired,
}
