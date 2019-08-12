import React, { useContext } from "react"
import { Table } from "nature-graphic-components"

import figureContext from "../FigureContainer/figureContext"
import useData from "../customHooks/useData"

const TableContainer = () => {
	const { yAxisLegendText, yAxisFormat } = useContext(figureContext)
	const { data, columnNamesAsText } = useData()

	return (
		<Table
			columnNames={columnNamesAsText}
			data={data}
			yAxisFormat={yAxisFormat}
			yAxisLegendText={yAxisLegendText}
		/>
	)
}

export default TableContainer
