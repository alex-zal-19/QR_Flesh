import React, { useState } from 'react';
import '../style/MenuSettings.css';


function MenuSettings() {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([
      { id: 1, name: '12344', price: 0, group: 'Без групи', selected: false },
      { id: 2, name: '35', price: 0, group: 'Без групи', selected: false },
      { id: 3, name: 'test', price: 1, group: 'Без групи', selected: false },
      { id: 4, name: 'Юбка', price: 49.5, group: 'Без групи', selected: true },
      { id: 5, name: 'Американо', price: 20, group: 'Без групи', selected: true },
      { id: 6, name: 'Хуяк', price: 0, group: 'Без групи', selected: false },
      { id: 7, name: '1234', price: 1, group: 'Без групи', selected: false },
      { id: 8, name: 'Вино', price: 30, group: 'Без групи', selected: true },
    ]);
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSelect = (id) => {
      setItems(items.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      ));
    };
  
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
    <div className="pos-table-container">
      <h2>Номенклатура з POS-системи</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Пошук за назвою або артикулом страви"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="pos-table">
        <thead>
          <tr>
            <th>Назва</th>
            <th>Вартість</th>
            <th>Група</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td> 
                <label className="switch" >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelect(item.id)}
                  />
                  <span className="slider"/>
                </label>
                <span>{item.name}</span>
                
              </td>
              <td>{item.price} ₴</td>
              <td>{item.group}</td>
              <td>
                <button className="action-btn">+</button>
                <button className="action-btn edit">✎</button>
                <button className="action-btn delete">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  
  
  export default MenuSettings;