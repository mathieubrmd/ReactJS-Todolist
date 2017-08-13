import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const { title, buttonIcon, onClick } = this.props;

        return (
            <div className="header">
                <p className="header-title">
                    {title}
                </p>

                <p className="header-button" onClick={onClick}>
                    {buttonIcon}
                </p>
            </div>
        );
    }
}

export default Header;
