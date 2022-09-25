import React, {ReactNode} from 'react';
import './App.css';
import Header from "./Componets/MainPage/Header";
import Login from "./Componets/MainPage/Login";
import Cookies from 'js-cookie';




function App() {
    if (Cookies.get('refreshToken') == undefined) {
        return(
        <div className='App'>
            <Login/>
        </div>
        );
    }
    else {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
