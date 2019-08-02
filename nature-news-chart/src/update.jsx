import React from "react"
import ReactDOM from "react-dom"
import state from "./state"
import data from "./data"
import GraphicContainer from "./components/GraphicContainer/index"

/**
 * Initialise the graphic
 */
const update = () => {
	const documentHeight = document.querySelector("body").offsetHeight
	window.parent.postMessage(
		{
			height: documentHeight,
			requestData: window.requestData,
		},
		"*"
	)

	const {
		chartInnerMargin,
		chartMargin,
		chartType,
		footnoteText,
		headLine,
		height,
		standFirst,
		xAxisLegendText,
		xAxisTickCount,
		yAxisLegendText,
		yAxisTickCount,
	} = state

	ReactDOM.render(
		<GraphicContainer
			chartInnerMargin={chartInnerMargin}
			chartMargin={chartMargin}
			chartType={chartType}
			footnoteText={footnoteText}
			data={data}
			headLine={headLine}
			height={height}
			standFirst={standFirst}
			xAxisLegendText={xAxisLegendText}
			xAxisTickCount={xAxisTickCount}
			yAxisLegendText={yAxisLegendText}
			yAxisTickCount={yAxisTickCount}
		/>,
		document.getElementById("graphic-container")
	)
}

export default update
