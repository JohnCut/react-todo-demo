import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        // preventing submitting to the actual file
        e.preventDefault()
        // binds state.title to App.js
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    // saves the targetted input value to the related state
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add to-do"
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add"
                    className="btn"
                    style={{ flex: '1' }} />
            </form>
        )
    }
}

// indicates what types props shoould be
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo