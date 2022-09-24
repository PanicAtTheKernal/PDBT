import React from 'react';
import '../../App.css';
import Dropdown from "react-bootstrap/Dropdown";

function MessageNav() {
    return (
        <Dropdown className="navbutton">
            <Dropdown.Toggle bsPrefix="bg-white nav-link nav-icon  bi bi-chat-left-text " className="navbutton">
                <span className="badge bg-success badge-number">3</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="messages">
                <Dropdown.Header>
                    You have 3 new messages
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </Dropdown.Header>

                <Dropdown.Divider/>

                <Dropdown.Item className="message-item">
                    <a href="#">
                        <img src="../../assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="message-item">
                    <a href="#">
                        <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"/>
                            <div>
                                <h4>Anna Nelson</h4>
                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                <p>6 hrs. ago</p>
                            </div>
                    </a>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="message-item">
                    <a href="#">
                        <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"/>
                            <div>
                                <h4>David Muldon</h4>
                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                <p>8 hrs. ago</p>
                            </div>
                    </a>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="dropdown-footer">
                    <a href="#">Show all messages</a>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MessageNav;