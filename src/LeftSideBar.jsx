import React from "react";
import { slide as Menu } from "react-burger-menu";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import facilities from "./data/facilities";
import "./SideBar.css";

export default props => {
    return (
        <div>
            <div className="menu-header"></div>
            <Menu noOverlay isOpen>
                <b>Locations</b>
                <div className="locations hideScroll">
                    <Accordion>
                        {facilities.map((facility, i) => {
                            return (
                                <Card className="facility invisible">
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey={facility.id}
                                        className="visible"
                                    >
                                        {facility.name}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={facility.id}>
                                        <Card.Body className="subFacility visible">
                                            {facility.subFacilities.map(
                                                (subFacility, i) => {
                                                    return (
                                                        <Card>
                                                            {subFacility.name}
                                                        </Card>
                                                    );
                                                }
                                            )}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            );
                        })}
                    </Accordion>
                </div>
            </Menu>
        </div>
    );
};
