import React, { Component } from "react";
import data from "./facilities";
import menuData from "./pulleyDiner";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./Menus.css"
import "./Preferences.css";

    const contentStyle = {
        paddingTop: 100,
        paddingRight: 20,
        paddingBottom: 0,
        paddingLeft: 20
    };

    const borderStyle = {
        borderRadius: 20,
        fontSize: 30,
        textAlign: "center"
    };
    
    let columnStyle = {
        width: 300,
        maxHeight: 900,
        minHeight: 400,
        padding: 10
    }
    
    let columnInnerStyle = {
        width: 280,
        maxHeight: 850,
        minHeight: 350,
    }
    
    let menuStyle = {
        position: "absolute",
        left: "50%",
        marginLeft: -450,
        width: 900,
        color: "#1b1b1b"
    }

class Menus extends Component {
  render() {
    return (
      <div style={contentStyle}>
        <div className="menu-Header">
                PULLEY DINER
            </div>
            <div className="center">
                <div className="center-Inner">
                
            </div>
            </div>
            <div style={{width:900}}>
                <CardColumns style={menuStyle}>
                    {menuData.map((menu, i) => {
                        return (
                            <Card className="invisible" style={columnStyle}>
                                <div className="visible">
                                    <h1 className="submenu-category">
                                        {menu.type}
                                    </h1>
                                    <div className="overflow-auto" style={columnInnerStyle}>
                                        {menu.subMenu.map((item, j) => {
                                            return (
                                                <div>
                                                    <h2 className="submenu-item">
                                                        {item.name}
                                                    </h2>
                                                    <div className="submenu-serving">
                                                        <i>{item.servingSize}</i>
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