import React from "react"
import PropTypes from "prop-types"
import StyledForm from "./styles"

const Form = ({ children }) => <StyledForm>{children}</StyledForm>

export default Form

Form.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]).isRequired,
}
