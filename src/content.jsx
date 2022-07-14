import "./css/sb-admin-2.min.css";
import React from 'react';
import Topbar from "./Topbar";

class Content extends React.Component {
    render() {
        return  <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar ></Topbar>
                    </div>
                </div>
    }
}

export default Content;