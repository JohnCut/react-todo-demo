import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


export class TodoItem extends Component {
    state = {
        falseGifUrl: '',
        trueGıfUrl: ''
    }

    // styling function for to-do items
    getStyle = () => {
        return {
            background: '#A8DADC',
            padding: '10px',
            borderBottom: '2px #ccc solid',
        }
    }

    getTitleStyle = () => {
        return {
            color: '#1D3557',
            // dynamically changes the styling
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none',
        }
    }

    getImgStyle = () => {
        return {
            // border: '5px outset #E63946',
            border: '5px solid transparent',
            borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
            borderImageSlice: 1,
            height: this.props.todo.completed ? '150px' : '200px',
            width: this.props.todo.completed ? '150px' : '200px',
            filter: this.props.todo.completed ? 'grayscale(100%)' : 'none'
        }
    }

    search = this.props.todo.title.split(' ').join('+')
    compFalseUrl = `//api.giphy.com/v1/gifs/search?q=${this.search}&api_key=A4PGnhj5d5K8Ebxja8AOWG6HoYoh1nV1&limit=10`
    compTrueUrl = `//api.giphy.com/v1/gifs/search?q=done&api_key=A4PGnhj5d5K8Ebxja8AOWG6HoYoh1nV1&limit=10`

    async componentDidMount() {
        var fRN = Math.floor(Math.random() * 11)
        var tRN = Math.floor(Math.random() * 11)
        await axios.get(this.compFalseUrl).then(res => this.setState({ falseGifUrl: res.data.data[fRN].images.original.url }))
        await axios.get(this.compTrueUrl).then(res => this.setState({ trueGifUrl: res.data.data[tRN].images.original.url }))
    }

    render() {
        // destructuring for easy prop calling ( 'id' instead of 'this.props.todo.id' )
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                {/* displays todo prop's title */}
                <p style={itemStyle}>
                    <img
                        className="gifId"
                        style={this.getImgStyle()}
                        src={this.props.todo.completed ? this.state.trueGifUrl : this.state.falseGifUrl}
                        alt="loading..." />
                    <input style={chbStyle} type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    {<h3 style={this.getTitleStyle()}>{title}</h3>}
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
    background: '#E63946',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '25%',
    cursor: 'pointer',
    marginLeft: 'auto',
    order: '2'
}

const itemStyle = {
    display: 'flex',
    alignItems: 'center',

}

const chbStyle = {
    marginLeft: '5px',
    marginRight: '5px',
    // backgroundColor: '#1D3557',
}

export default TodoItem
