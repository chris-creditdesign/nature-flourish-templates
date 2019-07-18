# Flourish template: Nature Chart

A React based template for creating Nature News charts with the [Flourish SDK](https://www.npmjs.com/package/@flourish/sdk).

Open a local flourish environment

	flourish run

To upload to flourish, increment the version number in `template.yml` and run

	flourish publish

To view the components with Storybook 

	npm run storybook

To run eslint on javascript components 

	npm run eslint

To run jest snapshot tests of all components 

	npm run test

## TODO:
- Make chart height grow with y-axis text length
- Account for blank fields in CSV file
- Allow switching between different chart types
- Add animation to chart toggle button
- Make x-axis labels not overlap
- Add how to guides
- Add production build for exported template
- Add guides to editors
- Add unit tests for GraphicContainer

