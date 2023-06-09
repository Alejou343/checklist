import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

    const onSearchValueChange = (event) => {
        return setSearchValue(event.target.value)
    }

    return (
        <input 
            placeholder = "Buscar Tarea" 
            className = 'TodoSearch'
            value = {searchValue}
            onChange = {onSearchValueChange}
            disabled = {loading}
        />
    );
}

export { TodoSearch };