const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

// since we dont want the css extract to happen server-side, 
// find the vue-loader and append extractCSS = true through the client config, not base config
config.module.rules
  .filter(x => { return x.loader === 'vue-loader' })
  .forEach(x => x.options.extractCSS = true)

config.plugins.push(
  new ExtractTextPlugin('assets/styles.css')
)

module.exports = config
