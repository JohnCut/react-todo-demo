import React, { Component } from 'react'
import Todos from './components/comps/Todos'
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

  render() {
    return (
      <div className="App">
        {/* it passes the state to Todos comp as 'todos' */}
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App
