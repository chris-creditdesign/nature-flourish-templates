import React from "react"
import useData from "../utils/useData"
import useDimensions from "../utils/useDimensions"

import ChartLine from "../ChartLine/index"
import ChartDots from "../ChartDots/index"

const ChartDataTableLine = () => {
	const { xScale, data, columnNames } = useData()
	const { chartInnerHeight, innerLeft, innerTop } = useDimensions()

	const columnHeaders = columnNames.map(d => (
		<text
			key={d}
			role="columnheader"
			x={xScale(d)}
			y={0}
			dy="1.5em"
		>
			{d}
		</text>
	))

	const rows = data.map((d, i) => {
		const { key } = d
		return (
			<g role="row" key={key}>
				<g role="rowheader">
					<ChartLine key={key} index={i} />
				</g>
				<ChartDots key={key} index={i} />
			</g>
		)
	})

	return (
		<g
			transform={`translate(${innerLeft},${innerTop})`}
			role="table"
		>
			<g
				transform={`translate(0,${chartInnerHeight})`}
				role="row"
				opacity={0}
			>
				<text role="columnheader"> </text>
				{columnHeaders}
			</g>

			{rows}
		</g>
	)
}

export default ChartDataTableLine
