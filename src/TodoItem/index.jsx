import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

    return (
        <li className="TodoItem">
        <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        >
            <img src= "https://cdn-icons-png.flaticon.com/128/87/87932.png"
                alt="check.png" 
                className= {`checkImg ${props.completed && 'checkImgCompleted'} `}
                onClick = {props.onComplete}
            />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.texto}
        </p>
        <span
            className="Icon Icon-delete"
        >
            <img src="https://cdn-icons-png.flaticon.com/128/9055/9055094.png" 
                alt="close.png"
                className='checkImg' 
                onClick = {props.onDelete}/>
        </span>
        </li>
    );
}

export { TodoItem };