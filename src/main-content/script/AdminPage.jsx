import React from 'react';
import { useState } from 'react';


import TableSettings from './TableSettings';
import EstablishmentSettings from './EstablishmentSettings';
import MenuSettings from './MenuSettings';
import profileImage from '../../img/Profile.svg';

import '../style/AdminPage.css';
import '../style/main.css';


function AdminPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">QR Flash</h1>
        <a href="/profile" className="profile-link">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="profile-icon" 
        />
        </a>
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


export default AdminPage;
