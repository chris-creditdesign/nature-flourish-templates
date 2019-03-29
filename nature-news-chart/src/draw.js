import { select } from 'd3-selection';
import state from './state'
import update from './update'

/**
 * Initialise the graphic
 */
const draw = () => {
	select(document.body)
		.append('svg')
		.attr('width', state.width)
		.attr('height', state.height)

	update()
}

export default draw
