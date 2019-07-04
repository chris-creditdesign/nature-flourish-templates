import React from "react"
import StyledRect from "./styles"
import useDimensions from "../utils/useDimensions"

const ChartBackgroundBox = () => {
	const {
		chartInnerHeight,
		chartInnerWidth,
		innerLeft,
		innerTop,
	} = useDimensions()

	return (
		<StyledRect
			aria-hidden
			height={`${chartInnerHeight}px`}
			width={`${chartInnerWidth}px`}
			x={`${innerLeft}px`}
			y={`${innerTop}px`}
		/>
	)
}

export default ChartBackgroundBox
