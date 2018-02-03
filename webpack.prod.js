const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(commonConfig, {
  plugins: [
    new uglifyJSWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[hash].bundle.js'
  }
});
