import React from 'react'
import { observer } from "mobx-react";

import TodoView from './TodoView'
import Form from './Form';


@observer
class TodoListView extends React.Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <ul>
          {store.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {store.unfinishedTodoCount}
        <Form store={store}/>
      </div>
    );
  }
}

export default TodoListView