import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Locations from "./Locations";
import Menus from "./Menus";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="heading">
                    <ul className="header">
                        <div className="header-right">
                            <li className="nav-item" id="nav-about">
                                <NavLink to="/locations">LOCATIONS</NavLink>
                            </li>
                            <li className="nav-item" id="nav-contact">
                                <NavLink to="/about">ABOUT</NavLink>
                            </li>
                        </div>
                        <div className="nav-center">
                            MIAMI UNIVERSITY
                            <div className="nav-sub">CAMPUS DINING</div>
                        </div>
                        <div className="header-left">
                            <li className="nav-item" id="nav-menus">
                                <NavLink exact to="/">
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item" id="nav-locations">
                                <NavLink to="/menus">MENUS</NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
                <div>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/locations" component={Locations} />
                        <Route path="/menus" component={Menus} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
