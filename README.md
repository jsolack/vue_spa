# Vuejs Single Page App Testing

[![Build Status](https://travis-ci.org/mattcc82/vue_spa.svg?branch=master)](https://travis-ci.org/mattcc82/vue_spa)

Playing around with Vue.js to get familiar with SPA patterns using Vue.js as the VM renderer. Includes technologies/tools like Node.js, Express, Webpack, NPM, and ESLint. 

## Getting Started

You'll want to make sure to be familiar with [Vue.js](https://vuejs.org/) and the other technologies associated with Vue.js
* vue-router
* Vue.js developer tool plugin/extention [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
* Vue state management [Vuex](https://vuex.vuejs.org/en/intro.html)

Read up on Node.js modules [Node.js Modules](https://nodejs.org/api/modules.html)

Node.js http server Express [Express intro](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

Understand how to use Node Package Manager [NPM](https://www.npmjs.com/)

Webpack basics [Webpack](https://webpack.js.org/)

[Babel](https://babeljs.io/) polyfill for transpiling es6(es2015) down to es5

The concept of [es6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Bulma low-overhead css framework [Bulma](https://bulma.io/) using SASS preprocessing

ESLint and the standard rules [standardJS](https://standardjs.com/)

Unit testing using [Karma](http://karma-runner.github.io/2.0/index.html) (test runner), [Mocha](https://mochajs.org/) (unit testing framework) [Chai](assertion library), [Sinon](http://sinonjs.org/) (mocks), [PhantomJS](http://phantomjs.org/)

* 2 spaces – for indentation
* Single quotes for strings – except to avoid escaping
* No unused variables – this one catches tons of bugs!
* No semicolons – It's fine. Really!
* Never start a line with (, [, or `
* This is the only gotcha with omitting semicolons – automatically checked for you!
* More details
* Space after keywords if (condition) { ... }
* Space after function name function name (arg) { ... }
* Always use === instead of == – but obj == null is allowed to check null || undefined.
* Always handle the node.js err function parameter
* Always prefix browser globals with window – except document and navigator are okay
* Prevents accidental use of poorly-named browser globals like open, length, event, and name.
* And more goodness – give standard a try today!

ES6 module exports / import pattern: (http://exploringjs.com/es6/ch_modules.html)

```javascript
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

```

### Prerequisites

Here's what you'll need:

[Node.js](https://nodejs.org/en/)

NPM (comes with Node)

### Installing

Just fork this repository

[Fork this repo](https://github.com/mattcc82/vue_spa/fork)

Open a git bash or node cli

```
npm start
```

To stop a node instance in a bash

```
ctrl + c
```

Navigate to 

```
localhost:3000
```

NPM scripts:

---

Starts the app localhost:

```
npm start
```

Rebuilds the app (dist dir):

```
npm build
```

Start Karma unit tests:

```
npm test
```

Mimic production env in localhost (NODE_ENV=development):

```
npm dev
```

### Footnotes

I set up Web2py restful api to communicate back data and auth information. Check out the guts of that out here:
(https://o2beta.gongos.com/vue_spa_rest_api/)

OR

(https://gongos-ds-vue-spa-api.azurewebsites.net/vue_spa_rest_api/)

 *** I didn't create a script to automatically rebuild the dist folder for deployment. I just manually "npm build" and push to Github and Azure picks up the change and rebuilds on Azure

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
