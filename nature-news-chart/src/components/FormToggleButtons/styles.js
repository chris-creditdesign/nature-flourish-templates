import styled from "@emotion/styled"
import FormFieldSet from "../FormFieldSet/index"

const StyledToggelButtons = styled(FormFieldSet)`
	legend {
		margin: 0;
		padding: 0;
	}

	.radiogroup {
		/* To align the checkboxes with the text */
		display: flex;
		align-items: baseline;

		input {
			margin: ${props => props.theme.margin.right.s};
		}

		label {
			margin: ${props => props.theme.margin.right.l};
		}
	}
`
export default StyledToggelButtons
