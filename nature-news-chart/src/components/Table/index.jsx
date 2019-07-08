import React, { useContext } from "react"
import StyledTable from "./styles"
import chartContext from "../GraphicContainer/chartContext"
import useData from "../utils/useData"

const Table = () => {
	const { title, yAxisFormat } = useContext(chartContext)
	const { data, columnNames } = useData()
	const columnHeaders = columnNames.map(d => (
		<th key={d} scope="col">
			{d}
		</th>
	))

	const rows = data.map(d => {
		const { key, values } = d

		const tableCells = values.map((dataPoint, index) => (
			<td key={`${columnNames[index]}-${dataPoint}`}>
				{yAxisFormat(dataPoint)}
			</td>
		))

		return (
			<tr key={key}>
				<th scope="row">{key}</th>
				{tableCells}
			</tr>
		)
	})

	return (
		<StyledTable>
			<table>
				<caption>{title}</caption>
				<thead>
					<tr>
						<th> </th>
						{columnHeaders}
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</StyledTable>
	)
}

export default Table
