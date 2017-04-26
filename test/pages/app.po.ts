import {Application} from 'spectron';
import * as electron from 'electron';
import {join} from 'path';

class AppPageObject {

  app: Application;

  async startApp() {
    this.app = new Application({
      path: electron,
      args: [join(__dirname, '..', '..', 'dist')],
      waitTimeout: 10000
    });

    await this.app.start();
  }

  stopApp() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  }

  getApp() {
    return this.app;
  }
}

export const appPageObject = new AppPageObject();