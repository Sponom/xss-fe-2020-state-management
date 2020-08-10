import React from 'react';

export default class Form extends React.Component {
  handleSubmit = (e, store) => {
    e.preventDefault();
    const input = e.target.elements['new-todo']
    const value = input.value.trim();
    if(!value) return false;
    store.addTodo(value);
    input.value = '';
  };

  render() {
    const { store } = this.props;
    return (
      <form onSubmit={(e) => this.handleSubmit(e, store)}>
        <input
          type="text"
          id={'new-todo'}
          placeholder={'Add a todo ...'}
        />
      </form>
    );
  }
}
