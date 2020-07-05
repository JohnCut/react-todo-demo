import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">Home</Link>
        </header>
    )
}

// variable styling for the header
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

// variable styling for the header nav links
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}