import React, { useContext } from "react"
import ChartContext from "../ChartContainer/ChartContext"

const Test = () => {
	const { width, height, text } = useContext(ChartContext)
	return (
		<div>
			<p>{text}</p>
			<p>{`width: ${width} height: ${height}`}</p>
		</div>
	)
}

export default Test
