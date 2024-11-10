import React from 'react';

// Підключення CSS
import '../style/components.css';

function Components () {
}

export function Button({className, children, onClick }) {
    className = "button" + ' ' + className
    return (
        <button className = { className} onClick={onClick} >{children} </button>
    );
}




export default Components;
