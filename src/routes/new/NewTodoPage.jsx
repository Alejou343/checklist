import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

const NewTodoPage = () => {

    const { updateState } = useTodos();
    const { addTodo } = updateState;

    return (
        <TodoForm 
        label = 'Crea tu nuevo TODO'
        button = 'Aceptar'
        submitEvent = {(text) => addTodo(text)}
        />
    );
}

export  { NewTodoPage };