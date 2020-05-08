import React, { Component } from "react";
import data from "./facilities";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Menu from "./Menu.jsx";

// Old file

class Menus extends Component {
    render() {
        return (
            <div style={{ position: "absolute", top: "100px" }}>
                        <h2>MENUS</h2>
                <HashRouter>
                    {data.map((menu, i) => {
                        return (
                            <div>
                                <div>
                                    <ul className="header">
                                        <li className="nav-item" id="nav-home">
                                            <NavLink exact to="/menu">
                                                {menu.name}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                    <div>
                        <div className="content">
                            <Route exact path="/menu" component={Menu} />
                        </div>
                    </div>
                </HashRouter>
                      
            </div>
        );
    }
}
export default Menus;
