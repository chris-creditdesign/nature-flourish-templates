import React, { useContext } from "react"
import PropTypes from "prop-types"
import StyledSvg from "./styles"
import chartContext from "../ChartContainer/chartContext"
import useDimensions from "../utils/useDimensions"

const Chart = ({ children }) => {
	const { title } = useContext(chartContext)
	const { chartHeight, chartWidth } = useDimensions()

	return (
		<StyledSvg
			height={`${chartHeight}px`}
			viewBox={`0 0 ${chartWidth} ${chartHeight}`}
			width={`${chartWidth}px`}
			focusable={false}
			aria-labelledby="chart-title"
		>
			<title id="chart-title">{title}</title>

			{children}
		</StyledSvg>
	)
}

export default Chart

Chart.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]).isRequired,
}
