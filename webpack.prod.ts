import {optimize, DefinePlugin} from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as BabelPlugin from 'babel-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as merge from 'webpack-merge';
import {baseConfig} from './webpack.base';

export default merge(baseConfig, {

  devtool: 'source-map',

  entry: {
    main: './app/main',
    bundle: ['babel-polyfill', 'index.tsx']
  },

  node: {
    __dirname: false,
    __filename: false
  },

  output: {
    publicPath: './'
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
    new optimize.CommonsChunkPlugin({name: 'main', filename: 'main.js'}),
    new optimize.OccurrenceOrderPlugin(true),
    new CleanWebpackPlugin(['dist', 'electron'], {}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /*new BabelPlugin({
      test: /\.js$/,
      presets: ['es2015', 'stage-0'],
      sourceMaps: false,
      compact: false
    }),
    new optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),*/
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new HtmlWebpackPlugin({excludeChunks: ['main']}),
    new CopyWebpackPlugin([{from: './package.json', to: 'package.json'}])
  ],

  target: 'electron-main'
});
