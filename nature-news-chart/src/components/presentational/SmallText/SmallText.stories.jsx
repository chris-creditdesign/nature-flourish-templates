import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import SmallText from "./index"
import state from "../../../state"

storiesOf("Presentational|Small text", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <SmallText text={state.footnoteText} />)
	.add("long text", () => (
		<SmallText text="*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
	))
	.add("with html", () => (
		<SmallText text="*<strong>Lorem ipsum dolor</strong> sit amet, <i>Nature</i> adipisicing elit, sed do eiusmod tempor incididunt ut <a href='http://www.nature.com'>nature.com</a>" />
	))
