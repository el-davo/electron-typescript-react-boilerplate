import {appPageObject} from '../pages/app.po';
import {todoListPageObject} from '../pages/todo-list.po';

describe('Todo list', () => {

  before(() => appPageObject.startApp());

  after(() => appPageObject.stopApp());

  it('should have a list of todo items', async() => {
    let items = await todoListPageObject.getListItems();
    items.value.length.should.eql(4);
  });

  it('should have correct name on each todo item', async() => {
    let test1Shown = await todoListPageObject.itemExists('test1');
    let test2Shown = await todoListPageObject.itemExists('test2');
    let test3Shown = await todoListPageObject.itemExists('test3');
    let test4Shown = await todoListPageObject.itemExists('test4');

    test1Shown.should.equal(true);
    test2Shown.should.equal(true);
    test3Shown.should.equal(true);
    test4Shown.should.equal(true);
  });
});