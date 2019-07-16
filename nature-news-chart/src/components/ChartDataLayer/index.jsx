import React from "react"
import useData from "../utils/useData"
import useDimensions from "../utils/useDimensions"

import ChartLine from "../ChartLine/index"
import ChartDots from "../ChartDots/index"

const ChartDataTableLine = () => {
	const { data } = useData()
	const { innerLeft, innerTop } = useDimensions()

	const rows = data.map((d, i) => {
		const { key } = d
		return (
			<g key={key}>
				<g>
					<ChartLine key={key} index={i} />
				</g>
				<ChartDots key={key} index={i} />
			</g>
		)
	})

	return <g transform={`translate(${innerLeft},${innerTop})`}>{rows}</g>
}

export default ChartDataTableLine
