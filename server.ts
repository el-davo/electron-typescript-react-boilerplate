import * as webpack from 'webpack';
import * as DevServer from 'webpack-dev-server';
import {config} from './webpack.dev';
import './app/main';

new DevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  inline: true
}).listen(3000, 'localhost', err => {
  err ? console.log(err) : console.log('Listening on port 3000');
});
