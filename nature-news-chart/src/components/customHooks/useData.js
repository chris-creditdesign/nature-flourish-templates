import { useContext } from "react"
import { scaleLinear, scaleBand } from "d3-scale"
import figureContext from "../FigureContainer/figureContext"
import useDimensions from "./useDimensions"

const valuesReducer = (accumlator, currentValue) => {
	// 1. Get the values array
	const { values } = currentValue
	// 2. Get the largest number in this array
	const maxValue = Math.max(...values)
	// 3. Return the accumulator or the maxValue
	// whichever is largest
	return Math.max(accumlator, maxValue)
}

const useData = () => {
	const { data, chartType } = useContext(figureContext)
	const { chartInnerWidth, chartInnerHeight } = useDimensions()

	// 1. Covert each of the values to numbers
	const dataAsNumbers = data.data.map(obj => {
		const { key, values } = obj
		const numberValues = values.map(str => parseFloat(str))
		return {
			key,
			values: numberValues,
		}
	})

	// 2. Get the largest data point
	const maxDataPoint = dataAsNumbers.reduce(valuesReducer, 0)

	// TEMP! Convert the column names to numbers
	const columnNamesAsNumbers = data.data.column_names.values.map(str =>
		parseInt(str, 10)
	)

	const minColumnName = Math.min(...columnNamesAsNumbers)
	const maxColumnName = Math.max(...columnNamesAsNumbers)

	let xScale

	if (chartType === "lineChart") {
		xScale = scaleLinear()
			.domain([minColumnName, maxColumnName])
			.range([0, chartInnerWidth])
	} else if (chartType === "verticalBarChart") {
		xScale = scaleBand()
			.domain(data.data.column_names.values)
			.range([0, chartInnerWidth])
			.paddingOuter(0.1)
			.paddingInner(0.5)
	}

	const yScale = scaleLinear()
		.domain([0, maxDataPoint])
		.range([chartInnerHeight, 0])

	return {
		data: dataAsNumbers,
		columnNames: columnNamesAsNumbers,
		yScale,
		xScale,
	}
}

export default useData
