import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./style.css";
import ceramixsketch from "../../images/ceramix-sketch";

export default function Mission() {
    return(
        <Container>
            <Row classname="missionRow">
                <Col xs={12} sm={3} md={3} lg={3} className="imgCol">
                    <img src={ceramixsketch} className="missionimage" alt="missionimage"/>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} className="missionCol">
                    <p className="missionp">
                    In light of recent assaults on Asian Americans, the goal of CERAMIX is to form a bridge between polarized parties, Asian culture and American culture, using art as a medium. 
                    How?
                    CERAMIX provides a platform for unknown traditional Asian craftsmanship and its practitioners who are not financially able to gain global exposure. Including Asian artists practicing traditional Bizen and Onta pottery, CERAMIX aims to educate people on the deep-rooted culture that Asian artists can offer on a global scale.
                    By showcasing the efforts and talent of Asian artists, CERAMIX communicates equality for all people.

                    </p>
                </Col>  
            </Row>
        </Container>
    )
}