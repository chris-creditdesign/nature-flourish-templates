/* eslint-disable indent */
import styled from "@emotion/styled"

const StyledTooltip = styled.div`
	position: absolute;
	pointer-events: none;
	min-width: max-content;
	display: inline-block;
	background-color: ${props => props.theme.backgroundColor.dark};
	color: ${props => props.theme.textColor.onDark};
	font-size: ${props => props.theme.fontSize.normal};
	padding: ${props => props.theme.padding.moreSideThanTop.s};

	&.transition {
		opacity: 0;
		transition: ${props =>
			`opacity ${props.theme.transitionTime}ms`};
	}

	&.tooltip-enter-active,
	&.tooltip-enter-done {
		opacity: 1;
	}

	&.right-bottom {
		transform: translate(calc(-100% - 15px), calc(-100% - 15px));

		&:before {
			top: calc(100% - 15px);
			left: calc(100% - 10px);
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: ${props =>
				`30px solid ${props.theme.backgroundColor.dark}`};
			transform: rotate(-45deg);
		}
	}

	&.right-top {
		transform: translate(calc(-100% - 15px), 15px);

		&:before {
			top: -15px;
			left: calc(100% - 10px);
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: ${props =>
				`30px solid ${props.theme.backgroundColor.dark}`};
			transform: rotate(45deg);
		}
	}

	&.left-bottom {
		transform: translate(15px, calc(-100% - 15px));

		&:before {
			top: calc(100% - 15px);
			left: -10px;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: ${props =>
				`30px solid ${props.theme.backgroundColor.dark}`};
			transform: rotate(45deg);
		}
	}

	&.left-top {
		transform: translate(15px, 15px);

		&:before {
			top: -15px;
			left: -10px;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: ${props =>
				`30px solid ${props.theme.backgroundColor.dark}`};
			transform: rotate(-45deg);
		}
	}

	&.middle-bottom {
		transform: translate(-50%, calc(-100% - 25px));

		&:before {
			top: calc(100% - 10px);
			left: calc(50% - 10px);
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: ${props =>
				`30px solid ${props.theme.backgroundColor.dark}`};
		}
	}

	&:before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		z-index: -999;
	}

	p {
		margin: 0;
		line-height: 1.3rem;
		max-width: 30ch;
	}

	.alert-enter {
		opacity: 0;
		transform: scale(0.9);
	}
	.alert-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: opacity 300ms, transform 300ms;
	}
	.alert-exit {
		opacity: 1;
	}
	.alert-exit-active {
		opacity: 0;
		transform: scale(0.9);
		transition: opacity 300ms, transform 300ms;
	}
`

export default StyledTooltip
