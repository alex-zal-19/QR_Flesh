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

export function TimeInput({className }) {
    className = "timeInput" + ' ' + className
    return (
        <input type = "time" className = { className}></input>
    );
}
export function Slider ({className, children, checked, onChange }) {
    className = "slider" + ' ' + className
    return (
    <label className="switch">
        {children} 
        <input 
            type="checkbox" 
            checked={checked}
            onChange={onChange}
        /> 
        
        <span className="slider"/>
      </label>
    );
}


export default Components;
