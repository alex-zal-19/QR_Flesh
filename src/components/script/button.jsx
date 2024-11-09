import React from 'react';

// Підключення CSS
import '../style/button.css';


function Button({className, children, onClick }) {
    className = "button" + ' ' + className
    return (
        <button className = { className} onClick={onClick} >{children} </button>
    );
}


export default Button;
