import React, {
	useContext,
	useEffect,
	useRef,
} from 'react'
import { ChartContext } from '../Chart'

const Headline = () => {
	const headlineElementRef = useRef(null)
	
	const {
		settings,
		setHeadlineHeight,
	} = useContext(ChartContext)

	const {
		headlineText,
		headlineStyle,
		svgMargins,
	} = settings

	const {
		right,
		top,
	} = svgMargins

	useEffect(() => {
		if (headlineElementRef.current) {
			const boundingBox = headlineElementRef.current.getBoundingClientRect()
			const {
				y,
				height,
			} = boundingBox
			setHeadlineHeight(y + height)
		}
	})

	return (
		<text
			ref={headlineElementRef}
			x={right}
			y={top} 
			style={headlineStyle}
			dy={"1em"}
		>
			{headlineText}
		</text>
	)
}

export default Headline
