import styled from "@emotion/styled"

const StyledFigure = styled.figure`
	margin: ${props => props.theme.margin.below.s};
	position: relative;
	padding: 0;

	.figure-grid-container {
		display: grid;
		grid-template-columns: min-content 1fr;

		.figure-chart-tooltip-container {
			position: relative;
			align-self: center;
		}

		/* p {
			line-height: 1em;
		} */

		.y-axis {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
			writing-mode: vertical-rl;
			transform: rotate(180deg);
			margin: 2ch 0;
			text-align: center;
		}

		.x-axis {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			text-align: center;
			margin: 0 2ch;
		}
	}
`

export default StyledFigure
