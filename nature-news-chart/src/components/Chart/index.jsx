import React, { useContext } from "react"
import PropTypes from "prop-types"
import chartContext from "../GraphicContainer/chartContext"
import useDimensions from "../utils/useDimensions"

const Chart = ({ children }) => {
	const { headLine } = useContext(chartContext)
	const { chartHeight, chartWidth } = useDimensions()

	return (
		<svg
			height={`${chartHeight}px`}
			viewBox={`0 0 ${chartWidth} ${chartHeight}`}
			width={`${chartWidth}px`}
			focusable={false}
			aria-labelledby="chart-title"
		>
			<title id="chart-title">{headLine}</title>

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
