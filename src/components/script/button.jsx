import React from 'react';

// Підключення CSS
import '../style/button.css';


function Button({ children, onClick }) {
    return (
        <button class="button" onClick={onClick} >{children} </button>
    );
}


export default Button;
