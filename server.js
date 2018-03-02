// Node.js require patter to load node_modules
// es6 'const' instead of var scoping/mutablitiy

// express http server
const express = require('express')
const app = express()
// node file system module
const fs = require('fs')
// node path module for more control over path
const path = require('path')
const isProd = typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production')

const indexHTML = (function () {
  // path module runs server.js relative to the apps dir    
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, './dist')))
  app.use('/static', express.static(path.join(__dirname, './static')))
} else {
  app.use('/dist', express.static(path.resolve(__dirname, './dist')))
  app.use('/static', express.static(path.join(__dirname, './static')))
}

if (!isProd) {
  // extend the dev-server.js modules
  require('./build/dev-server')(app)
}

// Express app.get
// request / response
// es5
app.get('*', function (req, res) {
  res.write(indexHTML)
  res.end()
})

// es6 
// app.get('*', (req, res) => {
//     res.write('Testing Express');
//     res.end(); 
// });

const port = process.env.PORT || 3000

// es5 version:
app.listen(port, function () {
  console.log('server started @ http://localhost:' + port)
})

// es6 'arrow function'
// app.listen(port, () => {
//     console.log(`server started @ http://localhost:${port}`);
// });
