import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { Tooltip } from "nature-graphic-components"

import theme from "../utils/theme"
import figureContext from "../FigureContainer/figureContext"

const TooltipContainer = () => {
	const { tooltipState } = useContext(figureContext)
	return (
		<CSSTransition
			in={tooltipState.visible}
			timeout={theme.transitionTime}
			classNames="tooltip"
			unmountOnExit
			appear
		>
			<Tooltip
				x={tooltipState.x}
				y={tooltipState.y}
				alignment={tooltipState.alignment}
			>
				<p>{tooltipState.value}</p>
			</Tooltip>
		</CSSTransition>
	)
}

export default TooltipContainer
