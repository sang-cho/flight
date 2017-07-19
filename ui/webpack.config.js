'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const devtool =
  'source-map'

const entry = {
  main: [
    'babel-polyfill',

    path.resolve(
      __dirname,
      'src/main.js'
    )
  ]
}

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[hash].js'
}

const resolve = {
  extensions: [
    '.js',
    '.css',
    '.html'
  ],
  modules: [
    'node_modules',
    'lib'
  ]
}

const rules = [{
  test: /\.js$/,
  exclude: [/node_modules/],
  use: [
    'babel-loader'
  ]
}, {
  test: /\.css$/,
  exclude: [path.resolve(__dirname, 'src')],
  use: [
    'style-loader',
    'css-loader'
  ]
},
{
  test: /\.css$/,
  exclude: [/node_modules/],
  use: [
    'classnames-loader',
    'style-loader',
    'css-loader?modules&localIdentName=[path]$[name]$[local]'
  ]
},
{
  test: /\.html$/,
  exclude: [path.resolve(__dirname, 'src')],
  use: 'html-loader'
},
 {
  test: /\.html$/,
  exclude: [/node_modules/, path.resolve(__dirname, 'static')],
  use: [
    'ngtemplate-loader',
    'html-loader'
  ]
}]

const plugins = [
  new HtmlWebpackPlugin({
    title: 'ftd-clicker',
    inject: 'head',
    template: path.resolve(__dirname, 'static/index.html')
  }),
  new DashboardPlugin()
]

const devServer = {
  compress: true,
  inline: true,
  overlay: true,
  historyApiFallback: true
}

module.exports = {
  devtool,
  entry,
  output,
  resolve,
  module: { rules },
  plugins,
  devServer
}
