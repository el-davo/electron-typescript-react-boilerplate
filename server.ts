import * as webpack from 'webpack';
import * as DevServer from 'webpack-dev-server';
import {error, info} from 'winston';
import './app/main';
import {config} from './webpack.dev';

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
}).listen(3000, 'localhost', (err) => {
  err ? error(err) : info('Listening on port 3000');
});
