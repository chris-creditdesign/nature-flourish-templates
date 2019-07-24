import React from "react"
import PropTypes from "prop-types"
import StyledToggelButtons from "./styles"

/* eslint-disable
    jsx-a11y/label-has-for,
    jsx-a11y/label-has-associated-control */
// Disabling as labels do have associated controls via id and htmlFor
const FormToggleButtons = ({
	disabled,
	id,
	message,
	onValueChange,
	value,
	valueFalseMessage,
	valueTrueMessage,
}) => {
	const valueTrueId = valueTrueMessage.replace(" ", "-").toLowerCase()
	const valueFalseId = valueFalseMessage.replace(" ", "-").toLowerCase()

	const handleChange = event => {
		const { value: eventValue } = event.target
		onValueChange(eventValue === valueTrueId)
	}

	return (
		<StyledToggelButtons disabled={disabled}>
			<legend id={id} className="bold">
				{message}
			</legend>

			<div
				className="radiogroup"
				role="radiogroup"
				aria-labelledby={id}
			>
				<input
					type="radio"
					id={valueTrueId}
					name={id}
					value={valueTrueId}
					checked={value}
					aria-checked={value}
					onChange={handleChange}
				/>
				<label htmlFor={valueTrueId}>
					{valueTrueMessage}
				</label>

				<input
					type="radio"
					id={valueFalseId}
					name={id}
					value={valueFalseId}
					checked={!value}
					aria-checked={!value}
					onChange={handleChange}
				/>
				<label htmlFor={valueFalseId}>
					{valueFalseMessage}
				</label>
			</div>
		</StyledToggelButtons>
	)
}

FormToggleButtons.propTypes = {
	disabled: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired,
	value: PropTypes.bool.isRequired,
	valueFalseMessage: PropTypes.string.isRequired,
	valueTrueMessage: PropTypes.string.isRequired,
}

export default FormToggleButtons
