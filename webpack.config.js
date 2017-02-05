const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  // it is called webpack devtool, no devtools
  devtool: 'eval-source-map',

  entry: './client/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'), // need full path
    filename: 'index_bundle.js'
  },
  
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  
  plugins: [HtmlWebpackPluginConfig]
  
}


