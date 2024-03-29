import React from 'react';
import { useState} from "react";
import Cookie from 'js-cookie';
import '../../App.css';
import { API } from '../../ApiHandler';
import { root } from '../../index';
import App from '../../App';

function setRefreshToken() {

}



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // @ts-ignore
    const submission = (event) => {
        event.preventDefault();
        API.login(username, password).catch((err) => {
            alert("Incorrect Login")
        });
        //re-rendering the app so that the main page will be loaded
        return root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>)
    }



    return (
        <div className="container">

            <section
                className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                            <div className="d-flex justify-content-center py-4">
                                <a href="#" className="logo d-flex align-items-center w-auto">
                                    <img src="" alt=""/>
                                    <span className="d-none d-lg-block">Bug Tracker</span>
                                </a>
                            </div>

                            <div className="card mb-3">

                                <div className="card-body">

                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                    </div>

                                    <form className="row g-3"  onSubmit={submission}>

                                        <div className="col-12">
                                            <label htmlFor="yourUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text"
                                                       value={username}
                                                       onChange={(e) => setUsername(e.target.value)}
                                                       name="username"
                                                       className="form-control"
                                                       id="yourUsername"
                                                       required/>
                                                <div className="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                            <input type="password"
                                                   value={password}
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   name="password"
                                                   className="form-control"
                                                   id="yourPassword"
                                                   required/>
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember"
                                                       value="true" id="rememberMe"/>
                                                <label className="form-check-label" htmlFor="rememberMe">Remember
                                                    me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit" >Login</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">Don't have account? <a href="#">Create
                                                an account</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
     );


}

export default Login;
