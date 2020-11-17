// https://svelte.dev/docs#Server-side_component_API
require('svelte/register');
const fs = require("fs")
const tidy = require('htmltidy2').tidy

const tidyOpts = {
	indent: true,
	wrap: 0
}

const App = require('./App.svelte').default;

const { head, html, css } = App.render({
	name: "Chris",
	example_state_property: 25,
});

const renderedPage = `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The <title> is inserted by Flourish -->

		<!-- Link to a stylesheet, or include an inline <style> section here -->
		${head}

		<style>
			${css.code}
		</style>
	</head>
	<body>
		<!-- If you want to start with a non-empty document, add elements here -->
		<!-- Relative links are rewritten to refer to the files in the static directory -->
		<div id="server-rendered-html">
			${html}
		</div>
	</body>
</html>
`

tidy(renderedPage, tidyOpts, function(err, result) {
	fs.writeFileSync('./index.html', result, 'utf8')
})
