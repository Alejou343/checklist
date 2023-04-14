import React from 'react';
import './TodoSearch.css';
import { todoContext } from '../TodoContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(todoContext);

    const onSearchValueChange = (event) => {
        return setSearchValue(event.target.value)
    }

    return (
        <input 
            placeholder = "Buscar Tarea" 
            className = 'TodoSearch'
            value = {searchValue}
            onChange = {onSearchValueChange}
        />
    );
}

export { TodoSearch };