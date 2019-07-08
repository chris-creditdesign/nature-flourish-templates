import React from "react"
import theme from "../utils/theme"
import useDimensions from "../utils/useDimensions"

const ChartBackgroundBox = () => {
	const {
		chartInnerHeight,
		chartInnerWidth,
		innerLeft,
		innerTop,
	} = useDimensions()

	return (
		<rect
			aria-hidden
			height={`${chartInnerHeight}px`}
			width={`${chartInnerWidth}px`}
			x={`${innerLeft}px`}
			y={`${innerTop}px`}
			fill={theme.backgroundColor.chart}
		/>
	)
}

export default ChartBackgroundBox
