import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const KeyColorLine = ({ index }) => (
	<svg width="15" height="15" focusable={false}>
		<line
			x1="2"
			y1="8"
			x2="13"
			y2="8"
			strokeWidth={theme.strokeWidth.xl}
			stroke={theme.chartColor[index]}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default KeyColorLine

KeyColorLine.propTypes = {
	index: PropTypes.number.isRequired,
}
