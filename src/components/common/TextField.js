import React, { Component } from 'react';
import './TextField.css';

class TextField extends Component {
    handleChange(event) {
        if (this.props.autoresize) {
            var lines = event.target.value.split("\n");  
            
            if (lines.length > event.target.rows)
                event.target.rows = lines.length;
        }

        this.props.onChange(event);
    }
    
    render() {        
        const { label, placeholder, rows, value } = this.props;

        return (
            <div className="text-container"> 
                <label className="label">{label}</label>
                <textarea className="input" placeholder={placeholder} rows={rows} onChange={this.handleChange.bind(this)} value={value} />
            </div>
        );
    }
}

export default TextField;
