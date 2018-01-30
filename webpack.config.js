var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
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
