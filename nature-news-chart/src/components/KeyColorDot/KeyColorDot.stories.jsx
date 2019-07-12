import React from "react"
import { storiesOf } from "@storybook/react"

import KeyColorDot from "./index"

storiesOf("Sections|Key/Components/ColorDot", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <KeyColorDot index={0} />)
