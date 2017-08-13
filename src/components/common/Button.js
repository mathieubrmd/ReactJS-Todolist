import React from 'react';
import './Button.css';

const Button = ({children, onClick}) => {
    return (
        <div className="button-container" onClick={onClick}>
            <p className="button-text">{children}</p>
        </div>
    );
}

export default Button;