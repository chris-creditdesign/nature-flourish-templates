import React, { useContext, useEffect, useRef } from "react"
import { ChartContext } from "../Chart"

const Standfirst = () => {
	const standfirstElementRef = useRef(null)

	const { settings, headlineHeight, setStandfirstHeight } = useContext(
		ChartContext
	)

	const { standfirstText, textStyle, svgMargins } = settings

	const { right } = svgMargins

	useEffect(() => {
		if (standfirstElementRef.current) {
			const boundingBox = standfirstElementRef.current.getBoundingClientRect()
			const { y, height } = boundingBox
			setStandfirstHeight(height)
		}
	})

	const splitText = standfirstText.split(/\r?\n/g).map((text, i) => (
		<tspan key={text} x={0} y={i * 20} dy="1em">
			{text}
		</tspan>
	))

	return (
		<text
			ref={standfirstElementRef}
			style={textStyle}
			x={0}
			y={0}
			transform={`translate(${right} ${headlineHeight})`}
		>
			{splitText}
		</text>
	)
}

export default Standfirst
