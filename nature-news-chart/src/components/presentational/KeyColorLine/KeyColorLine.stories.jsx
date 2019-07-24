import React from "react"
import { storiesOf } from "@storybook/react"

import KeyColorLine from "./index"

storiesOf("Presentational|Key/Components/ColorLine", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <KeyColorLine index={0} />)
