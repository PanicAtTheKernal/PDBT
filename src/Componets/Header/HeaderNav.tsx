import React from 'react';
import SearchNav from "./SearchIcon";
import NotificationNav from "./NotificationNav";
import '../../App.css';

function HeaderNav() {
    return (
        <div className="HeaderNav header-nav ms-auto">
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <SearchNav/>

                    <NotificationNav/>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderNav;
