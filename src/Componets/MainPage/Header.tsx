import React from 'react';
import Logo from "../Header/Logo";
import SearchBar from "../Header/SearchBar";
import HeaderNav from "../Header/HeaderNav";
import '../../App.css';

function Header() {
    return (
        <div className="Header">
            <header id="header" className="header fixed-top d-flex align-items-center">
                <Logo/>

                <SearchBar/>

                <HeaderNav/>
            </header>
        </div>
    );
}

export default Header;
