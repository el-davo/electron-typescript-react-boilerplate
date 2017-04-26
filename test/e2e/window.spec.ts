import {appPageObject} from '../pages/app.po';

describe('Todo list', () => {

  before(() => appPageObject.startApp());

  after(() => appPageObject.stopApp());

  it('should have the correct window', () => {
    appPageObject.getApp().client.waitUntilWindowLoaded().getWindowCount().should.eventually.equal(1);
  });

  it('should have no console errors', async() => {
    const {client} = appPageObject.getApp();
    const logs = await client.getRenderProcessLogs();
    logs.forEach(log => {
      console.log(log.message);
      console.log(log.source);
      console.log(log.level);
    });
    logs.should.have.length(0);
  });
});