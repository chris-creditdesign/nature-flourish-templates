import React from 'react'
import ReactDOM from 'react-dom'
import state from './state'
import data from './data'
import Chart from './components/Chart'

/**
 * Initialise the graphic
 */
const draw = () => {
	ReactDOM.render(<Chart settings={state} data={data} />,
		document.getElementById('graphic-container'))
}

export default draw
