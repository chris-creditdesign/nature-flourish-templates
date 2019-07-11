import React from "react"
import PropTypes from "prop-types"

const SVGColorBox = ({ fill }) => (
	<svg width="15" height="15" focusable={false}>
		<rect width="15" height="15" fill={fill} />
	</svg>
)

export default SVGColorBox

SVGColorBox.propTypes = {
	fill: PropTypes.string.isRequired,
}
