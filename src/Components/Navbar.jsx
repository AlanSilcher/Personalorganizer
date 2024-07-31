// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Logeo</Link>
        </li>
        <li>
          <Link to="/create-task">Crear Tareas</Link>
        </li>
        <li>
          <Link to="/manage-tasks">Gestionar Tareas</Link>
        </li>
        <li>
          <Link to="/">Pagina Principal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
