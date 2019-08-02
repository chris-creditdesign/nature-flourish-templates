import { useContext } from "react"
import { scaleLinear, scaleBand } from "d3-scale"
import { stack } from "d3-shape"
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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_and_concat
const flattenDeep = arr1 => {
	return arr1.reduce(
		(acc, val) =>
			Array.isArray(val)
				? acc.concat(flattenDeep(val))
				: acc.concat(val),
		[]
	)
}

const useData = () => {
	const { data, chartType } = useContext(figureContext)
	const { chartInnerWidth, chartInnerHeight } = useDimensions()

	const keys = data.data.map(d => d.key)
	const columnNamesAsText = data.data.column_names.values

	// 1. Covert each of the values to numbers
	const dataAsNumbers = data.data.map(obj => {
		const { key, values } = obj
		const numberValues = values.map(str => parseFloat(str))
		return {
			key,
			values: numberValues,
		}
	})

	// Reorder the data so that it can be stacked by d3.stack()
	const dataToBeStacked = columnNamesAsText.map((d, i) => {
		const result = {}
		result.x = d

		keys.forEach(key => {
			const foundData = dataAsNumbers.find(k => k.key === key)
			result[key] = foundData.values[i]
		})
		return result
	})

	// Stack the data
	const stacker = stack().keys(keys)
	const stacked = stacker(dataToBeStacked)

	// 2. Get the largest data point
	let maxDataPoint

	if (chartType === "stackedBarChart") {
		const flattened = flattenDeep(stacked)
		maxDataPoint = Math.max(...flattened)
	} else if (chartType === "verticalBarChart") {
		// If it is a simple barchart, we just want the max data point of
		// the first item in the array as this is the only one that
		// will be displayed.
		maxDataPoint = dataAsNumbers
			.slice(0, 1)
			.reduce(valuesReducer, 0)
	} else {
		maxDataPoint = dataAsNumbers.reduce(valuesReducer, 0)
	}

	// TODO: TEMP! Convert the column names to numbers
	// Will also need to convert to dates
	const columnNamesAsNumbers = columnNamesAsText.map(str =>
		parseInt(str, 10)
	)

	const minColumnName = Math.min(...columnNamesAsNumbers)
	const maxColumnName = Math.max(...columnNamesAsNumbers)

	let xScale
	let xScaleInternal

	if (chartType === "lineChart") {
		xScale = scaleLinear()
			.domain([minColumnName, maxColumnName])
			.range([0, chartInnerWidth])
	} else if (
		chartType === "verticalBarChart" ||
		chartType === "groupedBarChart" ||
		chartType === "stackedBarChart"
	) {
		xScale = scaleBand()
			.domain(columnNamesAsText)
			.range([0, chartInnerWidth])
			.paddingOuter(0.1)
			.paddingInner(0.5)

		xScaleInternal = scaleBand()
			.domain(keys)
			.range([0, xScale.bandwidth()])
			.paddingInner(0.3)
	}

	const yScale = scaleLinear()
		.domain([0, maxDataPoint])
		.range([chartInnerHeight, 0])

	return {
		data: dataAsNumbers,
		columnNamesAsText,
		columnNamesAsNumbers,
		yScale,
		xScale,
		xScaleInternal,
		stacked,
	}
}

export default useData
