import React, {
	createContext,
	useState,
} from 'react'
import Headline from './shared-components/Headline'
import Standfirst from './shared-components/Standfirst'
import CopyrightMark from './shared-components/CopyrightMark'

export const ChartContext = createContext({})

const Chart = (props) => {
	const {
		svgDimensions,
		color,
	} = props.settings

	const {
		width,
		height,
	} = svgDimensions

	const [headlineHeight, setHeadlineHeight] = useState(0)
	const [standfirstHeight, setStandfirstHeight] = useState(0)

	return (
		<ChartContext.Provider value={
			{
				...props,
				headlineHeight,
				setHeadlineHeight,
				standfirstHeight,
				setStandfirstHeight,
			}
		}>		
			<svg id="svg-chart"
				width={width}
				height={height}>

				<rect
					className="svg-background"
					width={width}
					height={height}
					fill={color.svgBackgroundColor}
					x={0} y={0} >
				</rect>

				<Headline />

				<Standfirst />

				<CopyrightMark />

			</svg>
		</ChartContext.Provider>
	)
}

export default Chart
