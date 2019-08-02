import React from "react"
import { storiesOf } from "@storybook/react"
import { ThemeProvider } from "emotion-theming"
import theme from "../../utils/theme"

import Footnote from "./index"
import state from "../../../state"

storiesOf("Presentational|Footnote", module)
	.addDecorator(story => (
		<ThemeProvider theme={theme}>{story()}</ThemeProvider>
	))
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <Footnote footnoteText={state.footnoteText} />)
