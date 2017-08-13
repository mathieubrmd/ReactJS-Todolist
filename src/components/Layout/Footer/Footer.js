import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        const { text } = this.props;        

        return (
            <div className="footer">
                {text}
            </div>
        );
    }
}

export default Footer;
