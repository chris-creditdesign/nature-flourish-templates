import App from "./App.svelte"

let app

export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export var state = {
  // The current state of template. You can make some or all of the properties
  // of the state object available to the user as settings in settings.js.
  example_state_property: 25,
  name: "Chris",
};

export function update() {
  // The update function is called whenever the user changes a data table or settings
  // in the visualisation editor, or when changing slides in the story editor.

  // Tip: to make your template work nicely in the story editor, ensure that all user
  // interface controls such as buttons and sliders update the state and then call update.
  
  // https://svelte.dev/docs#$set
  app.$set({
	name: state.name,
	example_state_property: state.example_state_property,
  })
}

export function draw() {
  // The draw function is called when the template first loads
  app = new App({
	  target: document.querySelector('#server-rendered-html'),
	  hydrate: true,
	  props: {
		  name: state.name,
		  example_state_property: state.example_state_property,
	  }
  })
}
