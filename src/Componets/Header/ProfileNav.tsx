import React from 'react';
import '../../App.css';
import Dropdown from "react-bootstrap/Dropdown";

function MessageNav() {
    return (
        <Dropdown className="navbutton">
            <Dropdown.Toggle bsPrefix="bg-white nav-link nav-profile d-flex align-items-center pe-0 " className="navbutton">
                <img src="../../assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="profile">
                <Dropdown.Header>
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                </Dropdown.Header>

                <Dropdown.Divider/>

                <Dropdown.Item >
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item >
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </Dropdown.Item>


                <Dropdown.Divider/>

                <Dropdown.Item >
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                </Dropdown.Item>


                <Dropdown.Divider/>

                <Dropdown.Item>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MessageNav;