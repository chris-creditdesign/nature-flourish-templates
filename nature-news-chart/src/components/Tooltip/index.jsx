import React from "react"
import PropTypes from "prop-types"
import StyledTooltip from "./styles"

const Tooltip = ({ children, x, y, alignment, transition }) => {
	return (
		<StyledTooltip
			className={`${alignment} ${
				transition ? "transition" : ""
			}`}
			style={{ left: x, top: y }}
			aria-hidden
		>
			{children}
		</StyledTooltip>
	)
}

export default Tooltip

Tooltip.defaultProps = {
	transition: true,
}

Tooltip.propTypes = {
	children: PropTypes.node.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	alignment: PropTypes.oneOf([
		"right-bottom",
		"right-top",
		"left-bottom",
		"left-top",
		"middle-bottom",
	]).isRequired,
	transition: PropTypes.bool,
}
