import React from 'react';
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({ sincronize }) => {

    const {show, toggleShow} = useStorageListener(sincronize)

        if (show) {
            return (
                <div className="ChangeAlert-bg">
                    <div className="ChangeAlert-container">
                        <p>Parece que hubo cambios en otra pestaña</p>
                        <p>¿Quieres sincronizar tu lista de tareas?</p>
                        <button 
                            className="TodoForm-button TodoForm-button--add" 
                            onClick={toggleShow}
                        >
                            Yes!
                        </button>
                    </div>
                </div>
            )
        } else {
            return null
        }
}

export { ChangeAlert };