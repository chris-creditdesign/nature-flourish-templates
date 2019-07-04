/**
 * Processed by Webpack to create an iife (Immediately Invoked Function Expression)
 * with the moudle name of 'template'
 *
 * Results in:
 * window.template = {
 * 	data:	{},
 * 	state:	{},
 * 	draw:	() => {},
 * 	update: () => {},
 * }
 *
 * `window.teplate.data`
 * An object into which Flourish will put the data from user-editable data tables.
 * Should be initialised to an empty object if the template accepts data.
 *
 * `window.template.state`
 * Default values should be set when the template loads.
 * State properties that are specified as settings in template.yml
 * are updated by Flourish when the user changes a setting in the
 * visualization editor.
 *
 * `widow.template.draw()`
 * Draw the document according to the state and data.
 * Called once initially, and may be used to create DOM elements,
 * initialize WebGL, etc.
 *
 * `window.template.update()`
 * Update the document – typically in an animated fashion –
 * to reflect the current values of the state and data.
 *
 *  */

export { default as data } from "./data"
export { default as state } from "./state"
export { default as draw } from "./draw"
export { default as update } from "./draw"
