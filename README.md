# hot-redux-chassis

An example of how various projects from the React ecosystem can be glued together for a nice developer experience. Will try to keep it up to date with the latest and greatest. It can also serve as a starting point for new projects.

## Features

* Next-generation JavaScript using [Babel 6](http://babeljs.io/)
* Hot Reloading ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
* Module bundling using [webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)
* Testing using [karma](https://github.com/karma-runner/karma), [enzyme](https://github.com/airbnb/enzyme), [sinon](https://github.com/sinonjs/sinon) and [chai](https://github.com/chaijs/chai)
* [ESLint](http://eslint.org/) for source code linting
* [Redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router) and [Immutable.js](https://facebook.github.io/immutable-js/)
* Code Splitting
* [CSS Modules](https://github.com/css-modules/css-modules) + [PostCSS](https://github.com/postcss/postcss) for sane CSS management
* HTTP requests using [`window.fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) + a tiny convenience wrapper for JSON requests

## Start a New Project

To use it, just clone the repo and remove the `.git` folder and start over using your version control system of choice. No friggin' generators. Remember to update your `package.json` and `LICENSE.md`, though.

```bash
git clone git@github.com:Hanse/hot-redux-chassis.git new-project-name
cd new-project-name
rm -rf .git
git init
vim package.json # Edit package.json before committing
git add .
git commit -m "Initial commit"
```
