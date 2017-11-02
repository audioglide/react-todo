import React, { Component } from 'react';
import TodoList from '../todo/todolist';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TodoList />
      </MuiThemeProvider>

    );
  }
}

export default App;
