import React from 'react';
import { useNavigate } from "react-router-dom";



import Button from '../../components/script/button';

import '../style/LoginPage.css';
import '../../App.css';

function LoginPage() {
    const navigate = useNavigate();

    const goToAdmin = () => {
    navigate("/Admin");
    };

    return(
        <div className='app-container'>
            <div class="card">
                <h4 class="title">Log In!</h4>
                <form>
                        <div class="field">
                        <img class="input-icon" viewBox="0 0 500 500" src="../../icons/phone.svg" alt="phone" ></img> 
                        <input autocomplete="off" id="logtel" placeholder="Phone number" class="input-field" name="logtel" type="tel"/>
                    </div>
                        <div class="field">
                        <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">

                        
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                        <input autocomplete="off" id="logpass" placeholder="Password" class="input-field" name="logpass" type="password"/>
                    </div>
                    <Button className="card-button" type="submit" onClick = {goToAdmin} > login </Button>
                    {/* 
                            Fogot Зробим потом
                    <a href="#" class="btn-link">Forgot your password?</a> 
                    */}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;