import styled from "@emotion/styled"
import FormFieldSet from "../FormFieldSet/index"

const StyledSlider = styled(FormFieldSet)`
	input {
		width: 100%;
		display: block;
		font-size: ${props => props.theme.fontSize.normal};
		margin: 0;
	}

	output {
		display: block;
		margin: ${props => props.theme.margin.below.s};
		text-align: center;
		font-size: ${props => props.theme.fontSize.xl};
		font-weight: ${props => props.theme.fontWeight.bold};
	}
`

export default StyledSlider
