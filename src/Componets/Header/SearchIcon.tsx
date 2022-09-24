import React from 'react';
import '../../App.css';

function Header() {
    return (
        <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
            </a>
        </li>
    );
}

export default Header;
