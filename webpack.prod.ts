import * as BabelPlugin from 'babel-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import {DefinePlugin, optimize} from 'webpack';
import * as merge from 'webpack-merge';
import {baseConfig} from './webpack.base';

export default merge(baseConfig, {

  devtool: 'source-map',

  entry: {
    bundle: ['babel-polyfill', 'index.tsx'],
    main: './app/main'
  },

  node: {
    __dirname: false,
    __filename: false
  },

  output: {
    filename: '[name].js',
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
          use: 'css-loader?modules&importLoaders=1&&localIdentName=[local]'
        })
      }
    ]
  },

  plugins: [
    new optimize.OccurrenceOrderPlugin(true),
    new CleanWebpackPlugin(['dist', 'electron'], {}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabelPlugin({
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
    }),
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new HtmlWebpackPlugin({template: 'index.ejs', excludeChunks: ['main']}),
    new CopyWebpackPlugin([{from: './package.json'}, {from: 'app/img/**'}])
  ],

  target: 'electron-main'
});
