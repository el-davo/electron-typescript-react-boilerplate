import {optimize, DefinePlugin} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as merge from 'webpack-merge';
import {baseConfig} from './webpack.config.base';

export default merge(baseConfig, {

  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: '../dist/'
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      }
    ]
  },

  plugins: [
    new optimize.OccurrenceOrderPlugin(true),

    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new optimize.UglifyJsPlugin(),

    new ExtractTextPlugin({filename: 'style.css', allChunks: true})
  ],

  target: 'electron-renderer'
});
