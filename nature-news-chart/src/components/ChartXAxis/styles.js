import styled from "@emotion/styled"

const StyledGroup = styled.g`
	line {
		stroke: ${props => props.theme.color.line};
		stroke-width: ${props => props.theme.strokeWidth.s};
		shape-rendering: crispEdges;
		stroke-dasharray: none;
	}

	text {
		font-size: ${props => props.theme.fontSize.s};
		text-anchor: middle;
	}
`

export default StyledGroup
