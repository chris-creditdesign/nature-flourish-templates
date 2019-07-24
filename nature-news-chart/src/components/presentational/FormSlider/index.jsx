import React from "react"
import PropTypes from "prop-types"
import { range } from "d3-array"
import StyledSlider from "./styles"

/* eslint-disable
    jsx-a11y/label-has-for,
    jsx-a11y/label-has-associated-control */
// Disabling as labels do have associated controls via id and htmlFor
const FormSlider = ({ disabled, heading, id, max, min, onChange, value }) => {
	const handleChange = e => {
		const { value: newValue } = e.target
		onChange(parseInt(newValue, 10))
	}

	// Use d3.range() to get an array of yeach year from yearMin to yearMax
	const dataListOptions = range(min, max + 1, 1).map(x => (
		<option key={x} value={x} />
	))

	return (
		<StyledSlider disabled={disabled}>
			<label htmlFor={id} className="bold">
				{heading}
			</label>

			<output htmlFor={id}>{value}</output>

			<input
				id={id}
				type="range"
				step="1"
				min={min}
				max={max}
				value={value}
				aria-valuemin={min}
				aria-valuemax={max}
				aria-valuenow={value}
				onChange={handleChange}
				list={`list-${id}`}
			/>

			<datalist id={`list-${id}`}>{dataListOptions}</datalist>
		</StyledSlider>
	)
}

export default FormSlider

FormSlider.propTypes = {
	disabled: PropTypes.bool.isRequired,
	heading: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	max: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
}
