import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <nav id='menu'>
            <Link to='/'>
                Usuarios
            </Link>
            <Link to='task'> 
                Tareas
            </Link>
        </nav>
    );
}

export default Menu;