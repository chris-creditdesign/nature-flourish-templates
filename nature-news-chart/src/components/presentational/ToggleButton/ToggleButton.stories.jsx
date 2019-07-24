import React from "react"
import { storiesOf } from "@storybook/react"
import { StateDecorator, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import ToggleButton from "./index"

export const buttonStore = new Store({
	checked: false,
})

export const buttonProps = {
	checked: buttonStore.get("checked"),
	label: "Toggle this button",
	id: "toggle-button",
	onClick: () =>
		buttonStore.set({ checked: !buttonStore.get("checked") }),
	disabled: false,
	controls: "nature-graphic-figure",
}

storiesOf("Presentational|Toggle button", module)
	.addDecorator(StateDecorator(buttonStore))
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <ToggleButton {...buttonProps} />)
	.add("disabled", () => <ToggleButton {...buttonProps} disabled />)
