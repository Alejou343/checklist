import React from 'react';
import './TodoList.css';


const TodoList = (props) => {

    const renderFunc = props.children || props.render 

    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.totalTodos && !props.loading) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length ) && props.onEmptyResult()}
            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
            <ul>
                {props.children}
            </ul>
        </section> 
    );
}

export { TodoList };