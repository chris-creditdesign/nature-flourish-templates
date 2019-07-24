import styled from "@emotion/styled"

const ButtonStyled = styled.button`
	font-size: ${props => props.theme.fontSize.normal};
	padding: ${props => props.theme.buttonPadding};
	margin: ${props => props.theme.margin.below.l};
	background: ${props => props.theme.backgroundColor.extraLight};
	border: ${props => props.theme.border};
	border-radius: ${props => props.theme.borderRadius};
	cursor: pointer;

	&.reveal {
		padding: 5px 10px 5px 30px;
		display: block;
		position: relative;

		&:before {
			content: "";
			display: inline-block;
			background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii02MzIgMzU2IDE1IDEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC02MzIgMzU2IDE1IDEwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojODc4Nzg3O30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTYzMiwzNTZoMTVsLTcuNSwxMEwtNjMyLDM1NnoiLz4NCjwvc3ZnPg0K");
			background-position: 0px 0px, center;
			position: absolute;
			top: 10px;
			left: 10px;
			width: 15px;
			height: 10px;
			transition: transform 0.3s ease;
			transform: rotate(180deg);
		}

		&[aria-expanded="true"]:before {
			transform: rotate(0deg);
		}
	}
`

export default ButtonStyled
