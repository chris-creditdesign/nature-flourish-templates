import React from "react"
import PropTypes from "prop-types"

const ChartSVG = ({ children, chartHeight, chartWidth }) => (
	<svg
		height={`${chartHeight}px`}
		viewBox={`0 0 ${chartWidth} ${chartHeight}`}
		width={`${chartWidth}px`}
		focusable={false}
		aria-hidden
	>
		{children}
	</svg>
)

export default ChartSVG

ChartSVG.propTypes = {
	chartHeight: PropTypes.number.isRequired,
	chartWidth: PropTypes.number.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]).isRequired,
}
