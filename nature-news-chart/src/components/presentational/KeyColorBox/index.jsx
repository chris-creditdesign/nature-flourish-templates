import React from "react"
import PropTypes from "prop-types"
import theme from "../../utils/theme"

const KeyColorBox = ({ index }) => (
	<svg width="15" height="15" focusable={false}>
		<rect width="15" height="15" fill={theme.chartColor[index]} />
	</svg>
)

export default KeyColorBox

KeyColorBox.propTypes = {
	index: PropTypes.number.isRequired,
}
