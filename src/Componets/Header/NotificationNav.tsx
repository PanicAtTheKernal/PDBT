import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../App.css';

function NotificationNav() {
    return (
        <Dropdown className="navbutton">
            <Dropdown.Toggle bsPrefix="bg-white nav-link nav-icon  bi bi-bell " className="navbutton">
                <span className="badge bg-primary badge-number">4</span>


            </Dropdown.Toggle>

            <Dropdown.Menu className="notifications">
                <Dropdown.Header>
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                </Dropdown.Header>

                <Dropdown.Divider/>

                <Dropdown.Item className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                    </div>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                    </div>
                </Dropdown.Item>

                <Dropdown.Divider/>

                <Dropdown.Item className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NotificationNav;