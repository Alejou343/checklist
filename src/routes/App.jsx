import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NewTodoPage } from './new/NewTodoPage';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from '../routes/home/HomePage';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/new" element={<NewTodoPage />}/>
        <Route path="/edit/:id" element={<EditTodoPage />}/>
        <Route path="*" element={<p>NOT FOUND</p>}/>
      </Routes>
    </HashRouter>
  )
}

export { App };
