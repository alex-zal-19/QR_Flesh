import React from 'react';
import { useState } from 'react';


import TableSettings from './TableSettings';
import EstablishmentSettings from './EstablishmentSettings';
import MenuSettings from './MenuSettings';


import '../style/AdminPage.css';
import '../../App.css';


function AdminPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">QR Flash</h1>
        <span className="contact-number">+3803856873927</span>
      </header>
      <div className="main-container">
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
    </div>
  );
}


export default AdminPage;
