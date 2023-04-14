import React from 'react';
import { TodoCounter } from '../TodoCounter/index.jsx';
import { todoContext } from '../TodoContext/index.js';
import { TodoSearch } from '../TodoSearch/index.jsx';
import { TodoList } from '../TodoList/index.jsx';
import { TodoItem } from '../TodoItem/index.jsx';
import { CreateTodoButton } from '../CreateTodoButton/index.jsx';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index.jsx';
import './AppUI.css'

const AppUI = () => {

    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(todoContext)

    return (
    <React.Fragment>

    <TodoCounter />
    <TodoSearch />

    <TodoList>

        {error && <p>Hubo un error</p>}
        {loading && <div className='loader'></div>}
        {(!loading && !searchedTodos.length) && 
            <div className='crear'>
                <p>Crea tu primer TODO</p>
            </div>}


        {searchedTodos.map(x => (
        <TodoItem 
        key = {x.text} 
        texto = {x.text} 
        completed = {x.completed}
        onComplete = {() => completeTodos(x.text)} 
        onDelete = {() => deleteTodos(x.text)}
        />
        ))}

    </TodoList>

    {!!openModal && (
            <Modal>
                <TodoForm />
            </Modal>        
    )}

    <CreateTodoButton 
    openModal = {openModal}
    setOpenModal = {setOpenModal}
    />

    </React.Fragment>
    );
}

export { AppUI };