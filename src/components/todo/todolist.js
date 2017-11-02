import React, { Component } from 'react';
import AddItem from '../additem/additem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="todolist">
          <AddItem />
        </div>
      </div>
    );
  }
}

export default TodoList;
