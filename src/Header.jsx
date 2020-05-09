import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Locations from "./Locations";
import Menus from "./Menus";
import SideBar from "./SideBar";

class Main extends Component {
    render() {
        return (
            <header className="Header">
                <HashRouter>
                    <nav className="Nav">
                        <NavLink exact to="/">
                            HOME
                        </NavLink>
                        <NavLink to="/menus">MENUS</NavLink>
                        <NavLink exact to="/locations">
                            LOCATIONS
                        </NavLink>
                        <NavLink exact to="/about">
                            ABOUT
                        </NavLink>
                    </nav>
                </HashRouter>
            </header>
        );
    }
}
