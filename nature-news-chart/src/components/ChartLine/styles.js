import styled from "@emotion/styled"

const StyledPath = styled.path`
	fill: none;
	stroke-width: ${props => props.theme.strokeWidth.xl};
	stroke: ${props => props.theme.chartColor[props.index]};
	stroke-linecap: round;
	stroke-linejoin: round;
`

export default StyledPath
