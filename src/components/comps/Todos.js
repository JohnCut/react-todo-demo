import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        // loops through each item of the todos prop (foreach like)
        return this.props.todos.map((todo) => (
            // displays TodoItem and passes id as key and current todo as todo to TodoItem
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))
    }
}

// indicates what types props shoould be
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos
