import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from '.prop-types'

class Todos extends Component {
    render() {
        // loops through each item of the todos prop (foreach like)
        return this.props.todos.map((todo) => (
            // displays TodoItem and passes id as key and current todo as todo to TodoItem
            <TodoItem key={todo.id} todo={todo} />
        ))
    }
}

// indicates that todos prop should have an array
Todos.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos