import React from 'react';

const TodoHeader = ({ children, loading }) => {

    return (
        <header>
            {React.Children.toArray(children)
            .map(x => React.cloneElement(x, { loading }))}
        </header>
    );
}

export  { TodoHeader };