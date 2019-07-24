import React from "react"
import { storiesOf } from "@storybook/react"
import { StateDecorator, Store } from "@sambego/storybook-state"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import FormSlider from "./index"

export const sliderStore = new Store({
	value: 50,
})

export const sliderProps = {
	disabled: false,
	heading: "This is a slider",
	id: "slider",
	min: 0,
	max: 100,
	value: sliderStore.get("value"),
	onChange: value => sliderStore.set({ value }),
}

storiesOf("Presentational|Form/Components/Slider", module)
	.addDecorator(StateDecorator(sliderStore))
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <FormSlider {...sliderProps} />)
	.add("disabled", () => <FormSlider {...sliderProps} disabled />)
