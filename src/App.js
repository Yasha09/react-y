import React from 'react';

import './App.css';
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./Component/News/News";


function App(props) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
