import React from 'react';

const EmptyResult = (props) => {
    return (
        <div className="crear">
            <p>Sin coincidencias para '{props.searchValue}'</p>
        </div>
    );
}

export { EmptyResult };