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

	ReactDOM.render(
		<GraphicContainer settings={state} data={data} />,
		document.getElementById("graphic-container")
	)
}

export default update
