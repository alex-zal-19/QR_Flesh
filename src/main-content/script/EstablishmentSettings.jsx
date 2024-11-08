import React from 'react';
import '../style/EstablishmentSettings.css';
import '../../App.css';

function EstablishmentSettings() {
    return (
      <div className="main-container">
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

          {/* Розклад роботи */}
          <div className="settings-field">
            <div className="table-list">
              <h3>Розклад роботи:</h3>
              <ul>
                <li className="table-item">
                  <span className="table-item-span">Понеділок</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                </li>
                <li className="table-item">
                  <span className="table-item-span">Вівторок</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
                <li className="table-item">
                  <span className="table-item-span">Середа</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
                <li className="table-item">
                  <span className="table-item-span">Четвер</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
                <li className="table-item">
                  <span className="table-item-span">П'ятниця</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
                <li className="table-item">
                  <span className="table-item-span">Субота</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
                <li className="table-item">
                  <span className="table-item-span">Неділя</span>
                  <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"/>
                  </label>
                  <span className="table-item-span">Відкриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                    <span className="table-item-span">Закриття</span>
                    <select name="select">
                      <option value="value1">5:00</option>
                      <option value="value2">6:00</option>
                      <option value="value3">7:00</option>
                      <option value="value5">8:00</option>
                      <option value="value6">9:00</option>
                      <option value="value7">10:00</option>
                      <option value="value8">11:00</option>
                      <option value="value9">12:00</option>
                      <option value="value10">13:00</option>
                      <option value="value11">14:00</option>
                      <option value="value12">15:00</option>
                      <option value="value13">16:00</option>
                      <option value="value14">17:00</option>
                      <option value="value15">18:00</option>
                      <option value="value16">19:00</option>
                      <option value="value17">20:00</option>
                      <option value="value18">21:00</option>
                      <option value="value19">22:00</option>
                      <option value="value20">23:00</option>
                    </select>
                  </li>
              </ul>
            </div>
          </div >
          <div className="table-list">
            {/* <h3>Контакти:</h3> <button className="sidebar-button">Адміністратори (not work) </button> */}
          </div>
        </div>
      </div>
    );
  }
  export default EstablishmentSettings;