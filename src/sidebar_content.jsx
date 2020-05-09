import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import facilities from "./data/facilities.json";

const styles = {
    sidebar: {
        width: 256,
        height: "100%"
    },
    sidebarLink: {
        display: "block",
        padding: "16px 0px",
        color: "#757575",
        textDecoration: "none"
    },
    divider: {
        margin: "8px 0",
        height: 1,
        backgroundColor: "#757575"
    },
    content: {
        padding: "16px",
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0
    }
};

const SidebarContent = props => {
    const style = props.style
        ? { ...styles.sidebar, ...props.style }
        : styles.sidebar;

    return (
        <div style={style}>
            <div>
            Locations
            </div>
                
            <div style={styles.content}>
                <div style={styles.divider} />
                {facilities.map((facility, i) => {
                    return <button>{facility.name}</button>;
                })}
            </div>
        </div>
    );
};

SidebarContent.propTypes = {
    style: PropTypes.object
};

export default SidebarContent;
