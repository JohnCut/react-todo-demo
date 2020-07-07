import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export class TodoItem extends Component {
    state = {
        gifUrl: ''
    }

    // styling function for to-do items
    getStyle = () => {
        return {
            background: '#e4defc',
            padding: '10px',
            borderBottom: '2px #ccc solid',
            // dynamically changes the styling
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    search = this.props.todo.title.split(' ').join('+')
    compFalseUrl = `//api.giphy.com/v1/gifs/search?q=${this.search}&api_key=A4PGnhj5d5K8Ebxja8AOWG6HoYoh1nV1&limit=100`
    compTrueUrl = `//api.giphy.com/v1/gifs/search?q=done&api_key=A4PGnhj5d5K8Ebxja8AOWG6HoYoh1nV1&limit=100`

    async componentDidMount() {
        var rN = await Math.floor(Math.random() * 101)
        axios.get(this.compFalseUrl).then(res => this.setState({ gifUrl: res.data.data[rN].images.original.url }))
        console.log(this.state.gifUrl)
        console.log(this.compFalseUrl)
    }

    render() {
        // destructuring for easy prop calling ( 'id' instead of 'this.props.todo.id' )
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                {/* displays todo prop's title */}
                <p style={itemStyle}>
                    <img
                        style={imgStyle}
                        src={this.state.gifUrl}
                        alt="loading..." />
                    <input style={chbStyle} type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// indicates what types props shoould be
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

// styling through variable
/* const itemStyle = {
    backgroundColor: '#f4f4f4'
} */

// variable for to-do item delete button
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '25%',
    cursor: 'pointer',
    marginLeft: 'auto',
    order: '2'
}

const imgStyle = {
    height: '100px',
    width: '100px'
}

const itemStyle = {
    display: 'flex',
    alignItems: 'center',

}

const chbStyle = {
    marginLeft: '5px',
    marginRight: '5px'
}

export default TodoItem
