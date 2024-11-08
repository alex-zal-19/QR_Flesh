import React from 'react';
import './EstablishmentSettings.css';

function EstablishmentSettings() {
    return (
      <div className="settings-container">
        <a href="/menu" className="menu-link">Переглянути меню закладу</a>
        <div className="settings-field">
          <label>Логотип закладу:</label>
          <input type="file" accept="image/*" />
        </div>
        <div className="settings-field">
          <label>Назва закладу:</label>
          <input type="text" placeholder="Введіть назву закладу" />
        </div>
        <div className="settings-field">
          <label>Опис закладу:</label>
          <textarea placeholder="Введіть опис закладу"></textarea>
        </div>
        <div className="settings-field">
          <label>Мова меню в закладі:</label>
          <select>
            <option value="uk">Українська</option>
            <option value="en">Англійська</option>
            <option value="ru">Російська</option>
          </select>
        </div>
      </div>
    );
  }
  export default EstablishmentSettings;