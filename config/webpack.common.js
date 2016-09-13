var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'style': './src/webpackEntry/style.ts',
    'polyfills': './src/webpackEntry/polyfills.ts',
    'vendor': './src/webpackEntry/vendor.ts',
    'app': './src/webpackEntry/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|json)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'client/app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'client/app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills', 'style']
    }),

    new HtmlWebpackPlugin({
      template: 'src/webpackEntry/index.html'
    }),

    new CopyWebpackPlugin([
      // {output}/file.txt
      { context: 'src', from: 'client/assets/img', to: 'assets/img' }
    ])
  ]
};