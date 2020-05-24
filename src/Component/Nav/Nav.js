import React from "react";
import ss from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={ss.nav}>
            <div className={ss.item}>
                <NavLink to={'/profile'} activeClassName={ss.active}>Profile</NavLink>
            </div>

            <div className={ss.item}>
                <NavLink to={'/dialogs'} activeClassName={ss.active}>Messages</NavLink>
            </div>

            <div className={ss.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>

            <div className={ss.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>

            <div className={ss.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    )
};
export default Nav