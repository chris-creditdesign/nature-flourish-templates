import { useContext } from "react"
import chartContext from "../GraphicContainer/chartContext"

const useDimensions = () => {
	const { chartInnerMargin, chartMargin, height, width } = useContext(
		chartContext
	)

	const { left, right, top, bottom } = chartMargin

	const {
		left: innerLeft,
		right: innerRight,
		top: innerTop,
		bottom: innerBottom,
	} = chartInnerMargin

	const chartWidth = width - left - right
	const chartHeight = height - top - bottom
	const chartInnerWidth = chartWidth - innerLeft - innerRight
	const chartInnerHeight = chartHeight - innerTop - innerBottom

	return {
		chartHeight,
		chartInnerHeight,
		chartInnerWidth,
		chartWidth,
		innerLeft,
		innerTop,
	}
}

export default useDimensions
