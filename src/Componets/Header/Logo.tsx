import React from 'react';
import '../../App.css';
import logo from "../../assets/img/logo.png";

function Logo() {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src={logo} alt=""/>
                <span className="d-none d-lg-block">Bug Tracker</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
    );
}

export default Logo;