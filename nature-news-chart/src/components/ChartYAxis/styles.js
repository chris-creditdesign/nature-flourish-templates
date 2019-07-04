import styled from "@emotion/styled"

const StyledGroup = styled.g`
	.baseline {
		stroke: ${props => props.theme.color.line};
		stroke-width: ${props => props.theme.strokeWidth.xl};
		shape-rendering: crispEdges;
		stroke-dasharray: none;
	}

	.dottedLine {
		stroke: ${props => props.theme.color.line};
		stroke-width: ${props => props.theme.strokeWidth.s};
		shape-rendering: crispEdges;
		stroke-dasharray: 2, 3;
	}

	text {
		font-size: ${props => props.theme.fontSize.s};
		text-anchor: end;
	}
`

export default StyledGroup
