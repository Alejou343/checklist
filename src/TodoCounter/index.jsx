import React from 'react';
import './TodoCounter.css';
import { todoContext } from '../TodoContext'

const TodoCounter = () => {

    const {completedTodos, totalTodos} = React.useContext(todoContext)

    return (
        <h2 className='TodoCounter'> Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };