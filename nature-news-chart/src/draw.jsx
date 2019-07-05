import React from "react"
import ReactDOM from "react-dom"
import state from "./state"
import data from "./data"
import ChartContainer from "./components/ChartContainer/index"

/**
 * Initialise the graphic
 */
const draw = () => {
	window.requestData = {}
	console.log("Waiting for message")

	window.addEventListener("message", function resize(event) {
		console.log("Message recieved")
		if (event) {
			window.requestData = event.data
			console.log(event)
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

	ReactDOM.render(
		<ChartContainer settings={state} data={data} />,
		document.getElementById("graphic-container")
	)
}

export default draw
