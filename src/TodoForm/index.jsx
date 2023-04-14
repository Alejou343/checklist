import React from 'react';
import './TodoForm.css'
import { todoContext } from '../TodoContext';

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo, openModal, setOpenModal } = React.useContext(todoContext)

    const onCancel = () => {
        setOpenModal(!openModal)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(!openModal)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value = {newTodoValue}
            onChange= {onChange}
            placeholder = 'Cortar la cebolla para el almuerzo'
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                onClick= {onCancel} 
                type="button"
                className='TodoForm-button TodoForm-button--cancel'>
                    Cancelar
                </button>
                <button 
                type="submit"
                className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };