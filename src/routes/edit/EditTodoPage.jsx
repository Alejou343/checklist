import React from 'react';
import { TodoForm } from '../../ui/TodoForm/index.jsx';
import { useTodos } from '../useTodos.js';
import { useParams } from 'react-router-dom';

const EditTodoPage = () => {

    const { updateState } = useTodos();
    const { editTodo } = updateState;
    const params = useParams();

    const id = Number(params.id);

    return (
        <TodoForm 
        label = 'Editar TODO'
        button = 'Editar'
        submitEvent = {(newText) => editTodo(id, newText)}
        />
    );
}

export  { EditTodoPage };