import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { format } from "d3-format"

import StyledFigure from "../presentational/Figure/styles"
import ChartContainer from "../ChartContainer/index"
import TooltipContainer from "../TooltipContainer/index"
import TableContainer from "../TableContainer"
import figureContext from "./figureContext"

const FigureContainer = ({ showChart, settings, data, width }) => {
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
				...settings,
				data,
				width,
				yAxisFormat,
				xAxisFormat,
				tooltipState,
				handleMouseEnterDataElem,
				handleMouseLeaveDataElem,
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
					<Fragment>
						<TooltipContainer />
						<ChartContainer />
					</Fragment>
				) : (
					<TableContainer />
				)}
			</StyledFigure>
		</figureContext.Provider>
	)
}

export default FigureContainer

FigureContainer.propTypes = {
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
	showChart: PropTypes.bool.isRequired,
	width: PropTypes.number.isRequired,
}
