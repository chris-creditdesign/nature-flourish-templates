/* eslint-disable indent */
import styled from "@emotion/styled"

const ButtonStyled = styled.button`
	font-size: ${props => props.theme.fontSize.normal};
	border: none;
	background: none;
	color: ${props => props.theme.textColor.normal};

	padding: 0;

	/* This is to make the focus hightlight surrount the whole button */
	display: flex;
	align-items: center;

	/* This is to align the button to the right */
	width: max-content;
	margin: 0 0 0 100%;
	transform: translateX(-100%);

	cursor: pointer;

	.label {
		margin: ${props => props.theme.margin.right.s};
	}

	.on,
	.off {
		padding: ${props => props.theme.buttonPadding};
		background: ${props => props.theme.backgroundColor.extraLight};
	}

	.on {
		border-left: ${props => props.theme.border};
		border-top: ${props => props.theme.border};
		border-bottom: ${props => props.theme.border};
		border-radius: ${props => {
			return `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`
		}};
	}

	.off {
		border-right: ${props => props.theme.border};
		border-top: ${props => props.theme.border};
		border-bottom: ${props => props.theme.border};
		border-radius: ${props => {
			return `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`
		}};
	}

	&[aria-checked="false"] .on,
	&[aria-checked="true"] .off {
		background: ${props => props.theme.backgroundColor.dark};
		color: ${props => props.theme.textColor.onDarkFade};
	}

	&[disabled] {
		color: ${props => props.theme.textColor.light};
	}
`

export default ButtonStyled
