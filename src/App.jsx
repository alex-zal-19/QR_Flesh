import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';


// Підключення JSX
import LoginPage from './main-content/script/LoginPage';
import AdminPage from './main-content/script/AdminPage';

// Підключення CSS
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />       
        <Route path="/Admin" element={<AdminPage />} /> 
      </Routes>
    </Router>
  );
}


export default App;
