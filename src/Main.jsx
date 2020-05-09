import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Locations from "./Locations";
import Menus from "./Menus";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";

class Main extends Component {
    render() {
        return (
            <div id="main">
                <LeftSideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                    <HashRouter>
                        <div className="heading">
                            <ul className="header">
                                <div className="header-left">
                                    <li className="nav-item" id="nav-home">
                                        <NavLink exact to="/">
                                            HOME
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="nav-menus">
                                        <NavLink to="/menus">MENUS</NavLink>
                                    </li>
                                </div>
                                <div className="header-right">
                                    <li className="nav-item" id="nav-locations">
                                        <NavLink to="/locations">
                                            LOCATIONS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="nav-about">
                                        <NavLink to="/about">ABOUT</NavLink>
                                    </li>
                                </div>
                                <div className="nav-center">
                                    MIAMI UNIVERSITY
                                    <div className="nav-sub">CAMPUS DINING</div>
                                </div>
                            </ul>
                        </div>
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/menus" component={Menus} />
                            <Route path="/locations" component={Locations} />
                            <Route path="/about" component={About} />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default Main;
