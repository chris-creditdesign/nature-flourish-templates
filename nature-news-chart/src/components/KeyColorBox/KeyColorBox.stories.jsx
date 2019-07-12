import React from "react"
import { storiesOf } from "@storybook/react"

import KeyColorBox from "./index"

storiesOf("Sections|Key/Components/ColorBox", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <KeyColorBox index={0} />)
