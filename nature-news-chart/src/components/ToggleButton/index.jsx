import React from "react"
import PropTypes from "prop-types"
import ButtonStyled from "./styles"

const ToggleButton = ({ onClick, checked, id, label, disabled, controls }) => (
	<ButtonStyled
		role="switch"
		aria-checked={checked}
		aria-labelledby={id}
		aria-controls={controls}
		onClick={onClick}
		disabled={disabled}
	>
		<span className="label" id={id}>
			{label}
		</span>
		<span className="on">on</span>
		<span className="off">off</span>
	</ButtonStyled>
)

export default ToggleButton

ToggleButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool.isRequired,
	controls: PropTypes.string.isRequired,
}
