#!/bin/sh

cat src/css/fonts.css \
node_modules/nature-immersive-svelte-components/static/css/custom-props.css \
node_modules/nature-immersive-svelte-components/static/css/light-theme.css \
node_modules/nature-immersive-svelte-components/static/css/index.css \
node_modules/nature-immersive-svelte-components/static/css/utilities.css \
> static/style.css

echo "static/style.css has be made"