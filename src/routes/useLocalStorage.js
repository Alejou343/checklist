import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [state, distpatch] = React.useReducer(reducer, initialState({ initialValue }))

    const { loading, error, item, sincronizedItem } = state;

    const onError = (error) => distpatch({
        type: actionTypes.error,
        payload: error,
    })

    const onSuccess = (item) => distpatch({
        type: actionTypes.success,
        payload: item,
    })

    const onSave = (item) => distpatch({
        type: actionTypes.save,
        payload: item,
    })

    const onSincronize = () => distpatch({
        type: actionTypes.sincronize,
    })

    React.useEffect(() => {
        setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue; 
            } else {
                parsedItem = JSON.parse(localStorageItem)
            }

        // setItem(parsedItem)
        onSuccess(parsedItem)
    } catch(error) {
            // setError(error)
            onError(error)
            }
        }, 2000)
    }, [itemName, initialValue, sincronizedItem])

        const saveItem = (newItem) => {
    try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        // setItem(newItem);
        onSave(newItem)
    } catch(error) {
        // setError(error)
        onError(error)
        }
    }

    const sincronizeItem = () => {
        // setLoading(true)
        // setSincronizedItem(false)
        onSincronize()
    }

    return {
        item, 
        saveItem,
        loading,
        error,
        sincronizeItem
    };
}

const initialState = ({ initialValue }) => ({
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {...state, error: true},
    [actionTypes.success]: {...state, error: false, loading: false, sincronizedItem: true, item: payload},
    [actionTypes.save]: {...state, item: payload},
    [actionTypes.sincronize]: {...state, sincronizedItem: false, loading: true}
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage }