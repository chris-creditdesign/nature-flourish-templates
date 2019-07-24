import React from "react"
import PropTypes from "prop-types"
import { State, Store } from "@sambego/storybook-state"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import TooltipContainer from "./index"
import figureContext from "../FigureContainer/figureContext"
import StyledFigure from "../presentational/Figure/styles"
import ChartSVG from "../presentational/ChartSVG/index"

import settings from "../../state"

const tooltipStore = new Store({
	visible: false,
	x: 0,
	y: 100,
	alignment: "middle-bottom",
	value: "Tooltip text",
})

const TestCircle = ({ x, y, alignment }) => (
	<circle
		cx={x}
		cy={y}
		r="5"
		onMouseEnter={() =>
			tooltipStore.set({
				visible: true,
				x,
				y,
				alignment,
				value: `Alignment: ${alignment.replace(
					"-",
					" "
				)}`,
			})
		}
		onMouseLeave={() =>
			tooltipStore.set({
				visible: false,
			})
		}
	/>
)

TestCircle.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	alignment: PropTypes.oneOf([
		"right-bottom",
		"right-top",
		"left-bottom",
		"left-top",
		"middle-bottom",
	]).isRequired,
}

storiesOf("Container|Tooltip", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<State store={tooltipStore}>
			{state => (
				<figureContext.Provider
					value={{
						tooltipState: {
							visible: state.visible,
							x: state.x,
							y: state.y,
							alignment:
								state.alignment,
							value: state.value,
						},
					}}
				>
					<StyledFigure>
						<TooltipContainer />
						<ChartSVG
							chartHeight={
								settings.height
							}
							chartWidth={
								settings.width
							}
						>
							<TestCircle
								x={
									settings.width *
									0.5
								}
								y={
									settings.height *
									0.5
								}
								alignment="middle-bottom"
							/>
							<TestCircle
								x={
									settings.width *
									0.2
								}
								y={
									settings.height *
									0.2
								}
								alignment="left-top"
							/>
							<TestCircle
								x={
									settings.width *
									0.8
								}
								y={
									settings.height *
									0.2
								}
								alignment="right-top"
							/>
							<TestCircle
								x={
									settings.width *
									0.2
								}
								y={
									settings.height *
									0.8
								}
								alignment="left-bottom"
							/>
							<TestCircle
								x={
									settings.width *
									0.8
								}
								y={
									settings.height *
									0.8
								}
								alignment="right-bottom"
							/>
						</ChartSVG>
					</StyledFigure>
				</figureContext.Provider>
			)}
		</State>
	))
