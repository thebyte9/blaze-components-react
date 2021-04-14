# blaze-components-react

View Documentation: https://blaze-components-react.thisisblaze.com

# recomended vscode extensions installed:

[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

[Prettier](https://github.com/prettier/prettier-vscode)

## Getting Started

- npm start -- component=ComponentName **Creates folder structure for new component.**

  npm start -- component=Footer

       Will create a folder structure on './src/Footer/'.

- yarn dev **Runs storybook dev server for development.**

- yarn lint **Runs eslint on js files.**

- yarn build **Runs webpack to build dist.**

## Publish

- yarn pre-publish && yarn build-storybook
- commit changes
- lerna publish
