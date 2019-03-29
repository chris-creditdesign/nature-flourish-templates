import { select } from 'd3-selection';
import 'd3-transition';
import setAttributes from './setAttributes'
import data from './data'

/**
 * The update function is called when the user changes a state property in
 * the settings panel or presentation editor.
 *
 * It updates elements to reflect the current state.
 *
 */
const update = () => {
	const svg = select('svg')

	const circles = svg.selectAll('circle')
		.data(data.circles)

	circles.enter()
		.append('circle')
		.call(setAttributes)

	circles.transition()
		.call(setAttributes)

	circles.exit()
		.remove()
}

export default update
