import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const ChartBackgroundBox = ({
	chartInnerHeight,
	chartInnerWidth,
	innerLeft,
	innerTop,
}) => {
	return (
		<rect
			height={`${chartInnerHeight}px`}
			width={`${chartInnerWidth}px`}
			x={`${innerLeft}px`}
			y={`${innerTop}px`}
			fill={theme.backgroundColor.chart}
		/>
	)
}

export default ChartBackgroundBox

ChartBackgroundBox.propTypes = {
	chartInnerHeight: PropTypes.number.isRequired,
	chartInnerWidth: PropTypes.number.isRequired,
	innerLeft: PropTypes.number.isRequired,
	innerTop: PropTypes.number.isRequired,
}
