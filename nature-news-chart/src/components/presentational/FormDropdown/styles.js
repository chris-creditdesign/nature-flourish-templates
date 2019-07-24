import styled from "@emotion/styled"
import FormFieldSet from "../FormFieldSet/index"

const StyledDropdown = styled(FormFieldSet)`
	label {
		display: block;
		margin: ${props => props.theme.margin.below.xs};
	}

	select {
		width: 100%;
		display: block;
		font-size: ${props => props.theme.fontSize.normal};
	}
`
export default StyledDropdown
