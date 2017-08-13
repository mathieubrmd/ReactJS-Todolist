import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    render() {
        const { headerText, footerText, children, visible, onClose } = this.props;

        if (visible) {
            return (
                <div className="modal-container animated fadeIn">
                    <div className="modal animated fadeInUp">
                        <div className="modal-header">
                            <h3 className="modal-title">{headerText}</h3>
                            <p className="modal-cross" onClick={onClose}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="modal-content">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {footerText}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Modal;
