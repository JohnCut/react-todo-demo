import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/comps/Todos'
import AddTodo from './components/comps/AddTodo'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

class App extends Component {
  // state of the App component, includes a 'todos' array
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Cook dinner',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Do chores',
        completed: false
      },
      {
        id: uuidv4(),
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      // (title: title) if name and value is the same, just write it once
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          {/* it passes the state to Todos comp as 'todos' */}
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App
