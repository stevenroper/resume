const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './index.html',
      title: 'Steven Roper',
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[path][name]_[hash:base64:5]',
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          },
          'postcss-loader',
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve("app"), "node_modules"]
  }
};
