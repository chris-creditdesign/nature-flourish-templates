import React from "react"
import PropTypes from "prop-types"
import ButtonStyled from "./styles"

const FormButton = ({ children, expanded, onClick, reveal }) => (
	<ButtonStyled
		aria-expanded={reveal ? expanded : null}
		className={reveal ? "reveal" : null}
		onClick={onClick}
		type="button"
	>
		{children}
	</ButtonStyled>
)

export default FormButton

FormButton.propTypes = {
	children: PropTypes.string.isRequired,
	expanded: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	reveal: PropTypes.bool.isRequired,
}
