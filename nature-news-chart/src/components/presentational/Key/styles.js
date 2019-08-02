import styled from "@emotion/styled"

const StyledList = styled.ul`
	list-style: none;
	margin: ${props => props.theme.margin.below.l};
	padding: 0;

	li {
		display: inline-block;
		margin: ${props => props.theme.margin.right.l};

		svg {
			margin: ${props => props.theme.margin.right.s};
		}
	}
`

export default StyledList
