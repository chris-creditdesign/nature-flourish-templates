import React from "react"
import PropTypes from "prop-types"
import { State, Store } from "@sambego/storybook-state"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import { Figure, ChartSVG } from "nature-graphic-components"

import theme from "../utils/theme"
import TooltipContainer from "./index"
import figureContext from "../FigureContainer/figureContext"

const width = 600
const height = 300

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
					<Figure>
						<TooltipContainer />
						<ChartSVG
							chartHeight={height}
							chartWidth={width}
						>
							<TestCircle
								x={width * 0.5}
								y={height * 0.5}
								alignment="middle-bottom"
							/>
							<TestCircle
								x={width * 0.2}
								y={height * 0.2}
								alignment="left-top"
							/>
							<TestCircle
								x={width * 0.8}
								y={height * 0.2}
								alignment="right-top"
							/>
							<TestCircle
								x={width * 0.2}
								y={height * 0.8}
								alignment="left-bottom"
							/>
							<TestCircle
								x={width * 0.8}
								y={height * 0.8}
								alignment="right-bottom"
							/>
						</ChartSVG>
					</Figure>
				</figureContext.Provider>
			)}
		</State>
	))
