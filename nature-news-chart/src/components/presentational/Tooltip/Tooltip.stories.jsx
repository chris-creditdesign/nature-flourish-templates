import React from "react"
import { storiesOf } from "@storybook/react"

import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import Tooltip from "./index"
import ChartSVG from "../ChartSVG/index"
import StyledFigure from "../Figure/styles"

const width = 600
const height = 300

storiesOf("Presentational|Tooltip", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="middle-bottom"
				transition={false}
			>
				<p>Align middle-bottom</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
	.add("long text", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height * 0.8}
				alignment="middle-bottom"
				transition={false}
			>
				<p>
					Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Culpa libero voluptate
					maiores alias nulla nihil ad ducimus.
					Accusantium at nam, corrupti
					voluptatibus dolor et consectetur eaque
					quos ipsa, nostrum repudiandae?
				</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle
					cx={width / 2}
					cy={height * 0.8}
					r={5}
				/>
			</ChartSVG>
		</StyledFigure>
	))
	.add("multi paragraph", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="middle-bottom"
				transition={false}
			>
				<p className="bold">Tool tip text</p>
				<p>Tool tip text</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
	.add("align right-bottom", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="right-bottom"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
	.add("align right-top", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="right-top"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
	.add("align left-bottom", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="left-bottom"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
	.add("align left-top", () => (
		<StyledFigure>
			<Tooltip
				x={width / 2}
				y={height / 2}
				alignment="left-top"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<ChartSVG chartHeight={height} chartWidth={width}>
				<circle cx={width / 2} cy={height / 2} r={5} />
			</ChartSVG>
		</StyledFigure>
	))
