import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const todoContext = React.createContext();

function TodoProvider(props) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V902', []);
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
        <todoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export {todoContext, TodoProvider};