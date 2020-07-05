import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/comps/Todos'
import AddTodo from './components/comps/AddTodo'
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import './App.css'

class App extends Component {
  // state of the App component, includes a 'todos' array
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
      )
  }

  // adds todo item to the server and ui later
  addTodo = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      // (title: title) if name and value is the same, just write it once
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* Merges AddTodo and Todos as one component */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* it passes the state to Todos comp as 'todos' */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
