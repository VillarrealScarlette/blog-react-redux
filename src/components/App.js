import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './users/Users';

const Tasks = () => {
  return (
    <div>
      Tareas
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Route exact path='/' component={ Users }></Route>
    <Route exact path='/task' component={ Tasks }></Route>
    </BrowserRouter>
  );
}