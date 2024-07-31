// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPage from './Pages/Login/Login';
import CreateTaskPage from './Pages/CreateTask/CreateTask';
import ManageTasksPage from './Pages/ManageTasks/ManageTasks';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-task" element={<CreateTaskPage />} />
          <Route path="/manage-tasks" element={<ManageTasksPage />} />
          <Route path="/" element={<h1>Bienvenido a la aplicación de gestión de tareas</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
