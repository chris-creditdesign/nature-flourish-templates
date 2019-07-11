import React from "react"
import { storiesOf } from "@storybook/react"

import GraphicContainer from "./index"
import state from "../../state"
import data from "../utils/testData"

storiesOf("Layouts|Chart", module)
	.addDecorator(story => <div className="nature-graphic">{story()}</div>)
	.add("default", () => <GraphicContainer settings={state} data={data} />)
