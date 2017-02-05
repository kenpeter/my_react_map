const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      // need the loader
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },
  
  plugins: [
    HtmlWebpackPluginConfig,
    
    // why assets/css/style.css, because serve from client, entry is ./client/index.js
    // This avoid webpack complied error: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin
    // we already import style in index.js
    new ExtractTextPlugin({ filename: 'assets/css/style.css', disable: false, allChunks: true })
  ]
  
}


