import React from 'react';
import { TodoForm } from '../../ui/TodoForm/index.jsx';
import { useTodos } from '../useTodos.js';
import { useParams, useLocation } from 'react-router-dom';

const EditTodoPage = () => {

    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);
    
    const { updateState } = useTodos();
    const { editTodo } = updateState;

        return (
            <TodoForm 
                label = 'Editar TODO'
                button = 'Editar'
                editText = {location.state.text}
                submitEvent = {(newText) => editTodo(id, newText)}
            />   
        );
    }


export  { EditTodoPage };