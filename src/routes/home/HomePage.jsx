import React from 'react';
import { useTodos } from '../useTodos';
import { useNavigate } from 'react-router-dom';
import { TodoCounter } from '../../ui/TodoCounter/index.jsx';
import { TodoHeader } from '../../ui/TodoHeader/index.jsx';
import { TodoSearch } from '../../ui/TodoSearch/index.jsx';
import { TodoList } from '../../ui/TodoList/index.jsx';
import { TodoItem } from '../../ui/TodoItem/index.jsx';
import { CreateTodoButton } from '../../ui/CreateTodoButton/index.jsx';
// import { Modal } from '../../ui/Modal';
// import { TodoForm } from '../../ui/TodoForm/index.jsx';
import { TodosLoading } from '../../ui/TodosLoading/index.jsx';
import { TodosError } from '../../ui/TodosError/index.jsx';
import { EmptyTodos } from '../../ui/EmptyTodos/index.jsx';
import { EmptyResult } from '../../ui/EmptyResult/index.jsx';
import { ChangeAlert } from '../../ui/ChangeAlert/index.jsx';
import '../App.css';


function HomePage() {

    const { state, updateState } = useTodos();
    const navigate = useNavigate();

    const {   
    error,
    loading,
    searchedTodos,
    // openModal,
    completedTodos,
    totalTodos,
    searchValue
    } = state;

    const {
    // setOpenModal,
    // addTodo,
    deleteTodos,
    completeTodos,
    setSearchValue,
    sincronizeTodos
    } = updateState;

    return (
    <React.Fragment>

    <TodoHeader loading = {loading}>
        <TodoCounter 
            completedTodos = {completedTodos}
            totalTodos = {totalTodos}
        />
        <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
        />
    </TodoHeader>

    <TodoList 
        error = {error}
        loading = {loading}
        searchedTodos = {searchedTodos}
        totalTodos = {totalTodos}
        onError = {() => <TodosError />}
        onLoading = {() => <TodosLoading />}
        onEmptyTodos = {() => <EmptyTodos />}
        onEmptyResult = {() => <EmptyResult 
        searchValue = {searchValue}
        />}
        render = {x => (        //Render prop --> en el componente TodoList se recibe como props.render
        <TodoItem 
            key = {x.id} 
            texto = {x.text} 
            completed = {x.completed}
            onComplete = {() => completeTodos(x.id)} 
            onEdit = {() => navigate(`/edit/${x.id}`, { state: x })}
            onDelete = {() => deleteTodos(x.id)}
        />
        )}
    />

    {/* {!!openModal && (
            <Modal>
                <TodoForm 
                    addTodo = {addTodo}
                    openModal = {openModal}
                    setOpenModal = {setOpenModal}
                />
            </Modal>        
    )} */}

    <CreateTodoButton 
    onClick = {() => navigate('/new')}
    // openModal = {openModal}
    // setOpenModal = {setOpenModal}
    />

    <ChangeAlert 
        sincronize = {sincronizeTodos}
    />

    </React.Fragment>
    );
}

export { HomePage };