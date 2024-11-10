import React from 'react';
import { TimeInput } from '../../components/script/components';
import { Slider } from '../../components/script/components';

import '../style/EstablishmentSettings.css';
import '../../App.css';

function EstablishmentSettings() {
    return (
        <div className="main-container">
            <div className="settings-container">
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
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">Вівторок</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">Середа</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">Четвер</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">П'ятниця</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">Субота</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
							</li>
							<li className="table-item">
								<span className="table-item-span">Неділя</span>
									<Slider/>
								<span className="table-item-span">Відкриття</span>
								<div name="select">
									<TimeInput/>
								</div>
								<span className="table-item-span">Закриття</span>
								<div name="select">
									<TimeInput/>
								</div>
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