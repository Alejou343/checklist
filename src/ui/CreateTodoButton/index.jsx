import React from 'react';
import './CreateTodoButton.css';

const CreateTodoButton = (props) => {
    
    const onClickButton = () => {
        props.onClick()
    }

    return (
        <button 
            className='CreateTodoButton'
            onClick = {onClickButton}
        > + </button>
    );
}

export { CreateTodoButton };