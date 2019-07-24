import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const KeyColorDot = ({ index }) => (
	<svg width="15" height="15" focusable={false}>
		<circle
			cx="7.5"
			cy="7.5"
			r={theme.dotRadius.s}
			fill={theme.chartColor[index]}
		/>
	</svg>
)

export default KeyColorDot

KeyColorDot.propTypes = {
	index: PropTypes.number.isRequired,
}
