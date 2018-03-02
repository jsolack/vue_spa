const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

// since we dont want the css extract to happen server-side, 
// find the vue-loader and append extractCSS = true through the client config, not base config

// uncomment this once in production -- this is breaking the hot module reload for style changes
config.module.rules
  .filter(x => { return x.loader === 'vue-loader' })
  .forEach(x => x.options.extractCSS = true)

config.plugins.push(
  new ExtractTextPlugin('assets/styles.css'),
  new CopyWebpackPlugin([
    { from: './static', to: 'assets/static' }
  ])
)

module.exports = config
