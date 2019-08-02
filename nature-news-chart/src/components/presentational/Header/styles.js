import styled from "@emotion/styled"

const StyledHeader = styled.header`
	margin: ${props => props.theme.margin.below.l};

	h1 {
		font-size: ${props => props.theme.fontSize.xxl};
		line-height: ${props => props.theme.fontSize.xxl};
		letter-spacing: 0.05rem;

		margin: ${props => props.theme.margin.below.xs};

		text-transform: uppercase;
		font-family: "Oswald", sans-serif;
	}

	p {
		padding: 0;
		margin: 0;
	}
`

export default StyledHeader
