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

export function TimeInput({className,  }) {
    className = "timeInput" + ' ' + className
    return (
        <input type = "time" className = { className}></input>
    );
}



export default Components;
