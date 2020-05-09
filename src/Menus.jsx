import React, { Component } from "react";
import menuData from "./pulleyDiner";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./Menus.css";
import "./Preferences.css";

let columnInnerStyle = {
    width: 280,
    maxHeight: 850,
    minHeight: 350
};

// The menus class. Shown on the menus page. Dynamically displays the menu given through user choice.

class Menus extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="content">
                    <div className="menu-Header">PULLEY DINER</div>
                <div className="center">
                    <div className="center-Inner"></div>
                </div>
                <div style={{ width: 900 }}>
                    <CardColumns className="columns">
                        {menuData.map((menu, i) => {
                            return (
                                <Card className="invisible column-Outer">
                                    <div className="visible">
                                        <h1 className="submenu-category">
                                            {menu.type}
                                        </h1>
                                        <div
                                            className="overflow-auto"
                                            style={columnInnerStyle}
                                        >
                                            {menu.subMenu.map((item, j) => {
                                                return (
                                                    <div>
                                                        <h2 className="submenu-item">
                                                            {item.name}
                                                        </h2>
                                                        <div className="submenu-serving">
                                                            <i>
                                                                {item.servingSize +
                                                                    " "}
                                                            </i>
                                                            <button
                                                                className="button-Add"
                                                                onClick={() => {
                                                                    this.handleClick(
                                                                        item.id
                                                                    );
                                                                }}
                                                            ></button>
                                                        </div>

                                                        <div className="submenu-prefs">
                                                            {item.preferences.map(
                                                                (pref, i) => {
                                                                    return (
                                                                        <div className="pref">
                                                                            <button
                                                                                className={
                                                                                    pref.css
                                                                                }
                                                                            >
                                                                                {
                                                                                    pref.name
                                                                                }
                                                                            </button>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </CardColumns>
                    <div className="menu_column"></div>
                </div>
                      
            </div>
        );
    }
}


export default Menus;
