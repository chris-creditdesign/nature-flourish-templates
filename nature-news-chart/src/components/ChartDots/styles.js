import styled from "@emotion/styled"

const StyledCircle = styled.circle`
	r: ${props => props.theme.dotRadius.xl};
	fill: ${props => props.theme.chartColor[props.index]};
`

export default StyledCircle
