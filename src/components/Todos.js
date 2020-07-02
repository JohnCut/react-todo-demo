import React from 'react';

function Todos() {
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

    console.log(this.state.todos)

    return (
        <div>
            <h1>Todos</h1>
        </div>
    );
}

export default Todos;
