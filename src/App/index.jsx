import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoCounter } from '../TodoCounter/index.jsx';
import { TodoHeader } from '../TodoHeader/index.jsx';
import { TodoSearch } from '../TodoSearch/index.jsx';
import { TodoList } from '../TodoList/index.jsx';
import { TodoItem } from '../TodoItem/index.jsx';
import { CreateTodoButton } from '../CreateTodoButton/index.jsx';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index.jsx';
import { TodosLoading } from '../TodosLoading/index.jsx';
import { TodosError } from '../TodosError/index.jsx';
import { EmptyTodos } from '../EmptyTodos/index.jsx';
import { EmptyResult } from '../EmptyResult/index.jsx';
import { ChangeAlert } from '../ChangeAlert/index.jsx';
import './App.css';


function App() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    openModal,
    completedTodos, 
    totalTodos,
    searchValue, 
    completeTodos, 
    deleteTodos,
    setOpenModal,
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos()

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
          key = {x.text} 
          texto = {x.text} 
          completed = {x.completed}
          onComplete = {() => completeTodos(x.text)} 
          onDelete = {() => deleteTodos(x.text)}
        />
      )}
    />


{/* <TodoList
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
>
{x => (           //Render function --> en el componente TodoList se recibe como props.children
        <TodoItem 
          key = {x.text} 
          texto = {x.text} 
          completed = {x.completed}
          onComplete = {() => completeTodos(x.text)} 
          onDelete = {() => deleteTodos(x.text)}
        />
      )}
</TodoList> */}

    {!!openModal && (
            <Modal>
                <TodoForm 
                  addTodo = {addTodo}
                  openModal = {openModal}
                  setOpenModal = {setOpenModal}
                />
            </Modal>        
    )}

    <CreateTodoButton 
    openModal = {openModal}
    setOpenModal = {setOpenModal}
    />

    <ChangeAlert 
      sincronize = {sincronizeTodos}
    />

    </React.Fragment>
  );
}

export { App };