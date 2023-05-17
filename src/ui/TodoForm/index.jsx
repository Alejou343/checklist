import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

const TodoForm = (props) => {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const navigate = useNavigate();

    const onCancel = () => {
        navigate('/')
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        navigate('/')
        props.submitEvent(newTodoValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
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
                    {props.button}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };