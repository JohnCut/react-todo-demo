import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/comps/Todos'
import AddTodo from './components/comps/AddTodo'
import './App.css'

class App extends Component {
  // state of the App component, includes a 'todos' array
  state = {
    todos: [
      {
        id: 1,
        title: 'Cook dinner',
        completed: false
      },
      {
        id: 2,
        title: 'Do chores',
        completed: false
      },
      {
        id: 3,
        title: 'Read 100 pages',
        completed: false
      }
    ]
  }

  // checks if the id matches the current state and changed 'completed' state to opposite value
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // checks if the id matches the current state and deletes(hides through filterring) it
  delTodo = (id) => {
    // ... is the spread operator
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id != id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          {/* it passes the state to Todos comp as 'todos' */}
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App
