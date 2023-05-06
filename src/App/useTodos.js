import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// En este archivo se administra toda lógica del programa, respuesta a eventos
// Se retorna todas las variables, estados y funciones necesarias para 
// la ejecución de la aplicación

function useTodos() {

    const {item: todos, saveItem: saveTodos, loading, error, sincronizeItem: sincronizeTodos} = useLocalStorage('TODOS_V902', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(x => !!x.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length < 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(x => {
        const todoText = x.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText)
        })
    }

    const addTodo = (text) => {

        const newTodos = [...todos]
        newTodos.push({completed: false, text,})
        saveTodos(newTodos);
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(x => x.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(x => x.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    } 

    return (
        {
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
        }
    )
}

export { useTodos };