import { observable, computed, action } from "mobx";


class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoListStore {
  @observable todos = [
    new Todo('Get Coffee'),
    new Todo('Write simpler code')
  ];
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
  @action
  addTodo(todo) {
    this.todos.push(new Todo(todo))
  }
}

const store = new TodoListStore();

export default store;