import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/script/components';
import Cookies from 'js-cookie';  // Импортируем библиотеку для работы с куки

import '../style/LoginPage.css';
import '../../App.css';
import phone from '../../icons/phone.svg';

function LoginPage() {
    const navigate = useNavigate();
    const accessToken = Cookies.get('accessToken');

    useEffect(() => {
        if (accessToken) {
          navigate('/Admin');
        }
      }, [accessToken, navigate]);

    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{10,13}$/;
        return phoneRegex.test(phone);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?!.*[^a-zA-Z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]).{6,20}$/;
        const simplePasswordRegex = /^(1234|12345|123456|1234567|12345678|123456789|qwerty|111111|password|admin|letmein)$/i; 
        return passwordRegex.test(password) && !simplePasswordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { phone, password } = formData;

        if (!validatePhone(phone)) {
            setPhoneError('Invalid phone number');
        } else {
            setPhoneError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password too weak or contains invalid characters');
        } else {
            setPasswordError('');
        }

        if (validatePhone(phone) && validatePassword(password)) {
            // Assuming API call here to authenticate and get tokens
            const  authtoken = {
                accessToken: 'fakeAccessToken123',
                refreshToken: 'fakeRefreshToken123'
            };

            // Set cookies with HttpOnly and Secure flags
            Cookies.set('accessToken',  authtoken.accessToken, { 
                httpOnly: true,
                secure: true,
                expires: 7 // optional: cookie will expire in 7 days
            });

            Cookies.set('refreshToken',  authtoken.refreshToken, { 
                httpOnly: true,
                secure: true,
                expires: 7 // optional: cookie will expire in 7 days
            });

            navigate("/Admin");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="app-container">
            <div className="card-wrapper">
                <div className="card">
                    <h4 className="title">Log In!</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <img className="input-icon" src={phone} alt="phone" />
                            <input
                                autoComplete="off"
                                id="logtel"
                                placeholder="Enter number +380"
                                className="input-field"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        {phoneError && <div className="error-message">{phoneError}</div>}
                        
                        <div className="field">
                            <svg className="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                            </svg>
                            <input
                                autoComplete="off"
                                id="logpass"
                                placeholder="Password"
                                className="input-field"
                                name="password"
                                type={isPasswordVisible ? "text" : "password"}
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                                {isPasswordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                        {passwordError && <div className="error-message">{passwordError}</div>}
                        <Button className="card-button" type="submit">
                            login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
