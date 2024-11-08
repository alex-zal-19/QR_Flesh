
import React from 'react';
import { useState } from 'react';

import TableSettings from './main-content/script/TableSettings';
import EstablishmentSettings from './main-content/script/EstablishmentSettings';
import MenuSettings from './main-content/script/MenuSettings';

 // Підключення CSS
import './App.css';



function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">QR Flash</h1>
        <span className="contact-number">+3803856873927</span>
      </header>
      <div className="content-container">
        <aside className="sidebar">
          <button className="sidebar-button" onClick={() => 
            setActiveComponent('profile')}>
            Профіль закладу
          </button>
          <button className="sidebar-button" onClick={() => 
            setActiveComponent('tables')}>
            Столи та QR-коди
            </button>
          <button className="sidebar-button">Адміністратори (not work) </button>
          <button className="sidebar-button">Банківські рахунки (not work) </button>
          <button className="sidebar-button"onClick={() => 
            setActiveComponent('MenuSettings')}>
            Налаштування меню
            </button>
          <button className="sidebar-button">Редактор меню (not work) </button>
        </aside>
        <main className="main-content">
          {activeComponent === 'profile' && <EstablishmentSettings />}
          {activeComponent === 'tables' && <TableSettings />}
          {activeComponent === 'MenuSettings' && <MenuSettings />}
          {!activeComponent && <p>Виберіть налаштування зі списку</p>}
        </main>
      </div>
    </div>
  );
}

export default App;
