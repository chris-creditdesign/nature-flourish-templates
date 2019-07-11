import React from "react"
import PropTypes from "prop-types"
import { CSSTransition } from "react-transition-group"
import { storiesOf } from "@storybook/react"

import { State, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../utils/theme"

import Tooltip from "./index"
import Chart from "../Chart/index"
import chartContext from "../GraphicContainer/chartContext"
import settings from "../../state"

const tooltipStore = new Store({
	tooltipVisible: false,
	x: 0,
	y: 0,
	alignment: "left-top",
})

const TestCircle = ({ x, y, alignment }) => (
	<circle
		cx={x}
		cy={y}
		r="5"
		onMouseEnter={() =>
			tooltipStore.set({
				tooltipVisible: true,
				x,
				y,
				alignment,
			})
		}
		onMouseLeave={() =>
			tooltipStore.set({
				tooltipVisible: false,
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

storiesOf("Tooltip", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => (
		<chartContext.Provider
			value={{
				...settings,
			}}
		>
			{story()}
		</chartContext.Provider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="middle-bottom"
				transition={false}
			>
				<p>Align middle-bottom</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Long text", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height * 0.8}
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
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height * 0.8}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Multi paragraph", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="middle-bottom"
				transition={false}
			>
				<p className="bold">Tool tip text</p>
				<p>Tool tip text</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Align right-bottom", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="right-bottom"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Align right-top", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="right-top"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Align left-bottom", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="left-bottom"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Align left-top", () => (
		<figure>
			<Tooltip
				x={settings.width / 2}
				y={settings.height / 2}
				alignment="left-top"
				transition={false}
			>
				<p>Align left top</p>
			</Tooltip>
			<Chart>
				<circle
					cx={settings.width / 2}
					cy={settings.height / 2}
					r={5}
				/>
			</Chart>
		</figure>
	))
	.add("Show on hover", () => (
		<State store={tooltipStore}>
			{state => (
				<figure>
					<CSSTransition
						in={state.tooltipVisible}
						timeout={theme.transitionTime}
						classNames="tooltip"
						unmountOnExit
						appear
					>
						<Tooltip
							x={state.x}
							y={state.y}
							alignment={
								state.alignment
							}
						>
							<p>Tool tip text</p>
						</Tooltip>
					</CSSTransition>
					<Chart>
						<TestCircle
							x={settings.width * 0.5}
							y={
								settings.height *
								0.5
							}
							alignment="middle-bottom"
						/>
						<TestCircle
							x={settings.width * 0.2}
							y={
								settings.height *
								0.2
							}
							alignment="left-top"
						/>
						<TestCircle
							x={settings.width * 0.8}
							y={
								settings.height *
								0.2
							}
							alignment="right-top"
						/>
						<TestCircle
							x={settings.width * 0.2}
							y={
								settings.height *
								0.8
							}
							alignment="left-bottom"
						/>
						<TestCircle
							x={settings.width * 0.8}
							y={
								settings.height *
								0.8
							}
							alignment="right-bottom"
						/>
					</Chart>
				</figure>
			)}
		</State>
	))
