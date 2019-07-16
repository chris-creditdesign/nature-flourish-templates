import React from "react"
import PropTypes from "prop-types"
import useDimensions from "../utils/useDimensions"

const Chart = ({ children }) => {
	const { chartHeight, chartWidth } = useDimensions()

	return (
		<svg
			height={`${chartHeight}px`}
			viewBox={`0 0 ${chartWidth} ${chartHeight}`}
			width={`${chartWidth}px`}
			focusable={false}
		>
			{children}
		</svg>
	)
}

export default Chart

Chart.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]).isRequired,
}
