import React from "react"
import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import Form from "./index"

import FormSlider from "../FormSlider/index"
import { sliderProps } from "../FormSlider/FormSlider.stories"

import FormButton from "../FormButton/index"
import { buttonProps } from "../FormButton/FormButton.stories"

import FormToggleButtons from "../FormToggleButtons/index"
import { toggelButtonsProps } from "../FormToggleButtons/FormToggleButtons.stories"

import FormDropdown from "../FormDropdown/index"
import { dropdownProps } from "../FormDropdown/FormDropdown.stories"

const formStore = new Store({
	buttonExpanded: false,
	sliderValue: 1980,
	toggelButtonsValue: true,
	dropdownValue: "value-1",
})

storiesOf("Presentational|Form", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => (
		<State store={formStore}>
			{state => (
				<Form>
					<FormSlider
						{...sliderProps}
						heading="Choose a year to display:"
						min={1980}
						max={2019}
						value={state.sliderValue}
						onChange={value =>
							formStore.set({
								sliderValue: value,
							})
						}
					/>

					<FormDropdown
						{...dropdownProps}
						labelText="Select an option:"
						value={state.dropdownValue}
						onChange={e =>
							formStore.set({
								dropdownValue:
									e.target
										.value,
							})
						}
					/>

					<FormToggleButtons
						{...toggelButtonsProps}
						message="Choose an option below:"
						value={state.toggelButtonsValue}
						valueFalseMessage="Show vaccinations"
						valueTrueMessage="Show cases"
						onValueChange={() =>
							formStore.set({
								toggelButtonsValue: !state.toggelButtonsValue,
							})
						}
					/>

					<FormButton
						{...buttonProps}
						onClick={() =>
							formStore.set({
								buttonExpanded: !state.buttonExpanded,
							})
						}
						expanded={state.buttonExpanded}
						reveal
					>
						{state.buttonExpanded
							? "Hide"
							: "Show"}
					</FormButton>

					{state.buttonExpanded ? (
						<p>More information...</p>
					) : null}
				</Form>
			)}
		</State>
	))
