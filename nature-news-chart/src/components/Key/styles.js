import styled from "@emotion/styled"

const StyledList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li {
		display: inline-block;
		margin: ${props => props.theme.margin.right.l};
	}
`

export default StyledList
