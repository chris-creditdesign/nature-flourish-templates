import state from './state'

const setAttributes = (selectionOrTransition) => {
	selectionOrTransition
		.attr('fill', state.color)
		.attr('opacity', state.opacity)
		.attr('cx', d => d.x * state.width)
		.attr('cy', d => d.y * state.height)
		.attr('r', d => Math.sqrt(d.size))
}

export default setAttributes
