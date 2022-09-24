import React from 'react';
import SearchNav from "./SearchIcon";
import NotificationNav from "./NotificationNav";
import MessageNav from "./MessageNav";
import ProfileNav from "./ProfileNav";
import '../../App.css';

function HeaderNav() {
    return (
        <div className="HeaderNav header-nav ms-auto">
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <SearchNav/>

                    <NotificationNav/>

                    {/* Message are currently planned
                    <MessageNav/>*/}

                    <ProfileNav/>
                </ul>
            </nav>
        </div>
    );
}

export default HeaderNav;
