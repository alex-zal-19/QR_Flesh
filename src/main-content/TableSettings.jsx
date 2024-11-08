
import React, { useState } from 'react';
import './TableSettings.css';

function TableSettings() {
  const [halls, setHalls] = useState(['Зал 1', 'Зал 2']);
  const [tables, setTables] = useState([
    { number: 1, enabled: true, qrCode: 'QR123' },
    { number: 2, enabled: true, qrCode: 'QR456' },
    { number: 3, enabled: false, qrCode: 'QR789' },
  ]);

  const toggleTableEnabled = (index) => {
    const updatedTables = [...tables];
    updatedTables[index].enabled = !updatedTables[index].enabled;
    setTables(updatedTables);
  };

  return (
    <div className="table-settings-container">
      <h2>Налаштування залів та столів</h2>
      
      {/* Вибір залів */}
      <div className="settings-field">
        <label>Виберіть зал:</label>
        <select>
          {halls.map((hall, index) => (
            <option key={index} value={hall}>{hall}</option>
          ))}
        </select>
      </div>
      
      {/* Перемикач для вимкнення столів у залі */}
      <div className="settings-field">
        <label>Вимкнути всі столи у залі:</label>
        <input type="checkbox" />
      </div>
      
      {/* Список столів */}
      <div className="table-list">
        <h3>Список столів</h3>
        <ul>
          {tables.map((table, index) => (
            <li key={index} className="table-item">
              <span>Номер стола: {table.number}</span>
              <label>
                Вимкнути стіл:
                <input
                  type="checkbox"
                  checked={!table.enabled}
                  onChange={() => toggleTableEnabled(index)}
                />
              </label>
              <span>QR-код: {table.qrCode}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TableSettings;
