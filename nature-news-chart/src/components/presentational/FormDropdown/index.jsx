import React from "react"
import PropTypes from "prop-types"
import StyledDropdown from "./styles"

/* eslint-disable
    jsx-a11y/label-has-for,
    jsx-a11y/label-has-associated-control */
// Disabling as labels do have associated controls via id and htmlFor
const FormDropdown = ({
	disabled,
	id,
	labelText,
	onChange,
	options,
	value,
}) => (
	<StyledDropdown disabled={disabled}>
		<label htmlFor={id} className="bold">
			{labelText}
		</label>
		<select id={id} value={value} onChange={onChange}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	</StyledDropdown>
)

export default FormDropdown

FormDropdown.propTypes = {
	disabled: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	value: PropTypes.string.isRequired,
}
