import React, { useContext } from "react"
import Table from "../presentational/Table/index"

import figureContext from "../FigureContainer/figureContext"
import useData from "../customHooks/useData"

const TableContainer = () => {
	const { yAxisLegendText, yAxisFormat } = useContext(figureContext)
	const { data, columnNames } = useData()

	return (
		<Table
			columnNames={columnNames}
			data={data}
			yAxisFormat={yAxisFormat}
			yAxisLegendText={yAxisLegendText}
		/>
	)
}

export default TableContainer
