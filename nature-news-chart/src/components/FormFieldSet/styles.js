import styled from "@emotion/styled"

const StyledFieldSet = styled.fieldset`
	border: none;
	padding: 0;
	margin: ${props => props.theme.margin.below.l};

	&[disabled] {
		color: ${props => props.theme.textColor.light};
	}
`

export default StyledFieldSet
