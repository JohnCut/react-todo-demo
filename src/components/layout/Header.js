import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do Demo</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

// variable styling for the header
const headerStyle = {
    background: '#457B9D',
    color: '#1D3557',
    textAlign: 'center',
    padding: '10px',
}

// variable styling for the header nav links
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}