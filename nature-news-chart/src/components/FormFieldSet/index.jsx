import React from "react"
import PropTypes from "prop-types"
import StyledFieldSet from "./styles"

const FormFieldSet = ({ children, className, disabled }) => (
	<StyledFieldSet className={className} disabled={disabled}>
		{children}
	</StyledFieldSet>
)

export default FormFieldSet

FormFieldSet.defaultProps = {
	className: "",
}

FormFieldSet.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
}
