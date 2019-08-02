import styled from "@emotion/styled"

const StyledFootnote = styled.p`
	font-size: ${props => props.theme.fontSize.s};
	line-height: ${props => props.theme.fontSize.normal};
	padding: 0;
	margin: ${props => props.theme.margin.below.s};
`

export default StyledFootnote
