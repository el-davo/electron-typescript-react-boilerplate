import {appPageObject} from './app.po';

class TodoListPageObject {

  async getListItems() {
    return appPageObject.getApp().client.elements('.todo-item');
  }

  async itemExists(name: string) {
    return appPageObject.getApp().client.isExisting(`div*=${name}`);
  }
}

export const todoListPageObject = new TodoListPageObject();