import React from "react"
import { storiesOf } from "@storybook/react"
import { StateDecorator, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import FormDropdown from "./index"

export const dropdownOptions = [
	{ text: "Option 1", value: "value-1" },
	{ text: "Option 2", value: "value-2" },
	{ text: "Option 3", value: "value-3" },
	{ text: "Option 4", value: "value-4" },
	{ text: "Option 5", value: "value-5" },
	{ text: "Option 6", value: "value-6" },
	{ text: "Option 7", value: "value-7" },
]

const dropdownStore = new Store({
	value: "value-1",
})

export const dropdownProps = {
	disabled: false,
	id: "drop-down",
	labelText: "This is a Dropdown component",
	options: dropdownOptions,
	value: dropdownStore.get("value"),
	onChange: e => dropdownStore.set({ value: e.target.value }),
}

storiesOf("Presentational|Form/Components/Dropdown", module)
	.addDecorator(StateDecorator(dropdownStore))
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <FormDropdown {...dropdownProps} />)
	.add("disabled", () => <FormDropdown {...dropdownProps} disabled />)
