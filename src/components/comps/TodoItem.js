import React, { Component } from 'react'
import PropTypes from '.prop-types'

export class TodoItem extends Component {
    render() {
        return (
            <div>
                {/* displays todo prop's title */}
                <h3>{this.props.todo.title}</h3>
            </div>
        )
    }
}

// indicates that todo prop should have an object
TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
