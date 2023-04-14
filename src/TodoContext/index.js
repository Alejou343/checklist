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
        // const stringifiedTodos = JSON.stringify(newTodos);
        // localStorage.setItem(itemName, stringifiedTodos);
        // setTodos(newTodos);
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(x => x.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        // const stringifiedTodos = JSON.stringify(newTodos);
        // localStorage.setItem(itemName, stringifiedTodos);
        // setTodos(newTodos);
        saveTodos(newTodos);
    } 

    // console.log('before')

    // React.useEffect(() => {
    //   console.log('use effect')
    // }, [completedTodos]); // --> Cuando haya cambios en la variable del segundo argumento, se renderizará la función del useEffect

    // console.log('after')

    // Orden de ejecución 1. 'before' 2. after 3. useEffect (Este solo se renderiza cuando se modifica el valor de completedTodos)


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