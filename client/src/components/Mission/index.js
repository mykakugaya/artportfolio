import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./style.css";
import ceramixsketch from "../../images/ceramix-sketch";

export default function Mission() {
    return(
        <Container>
            <Row classname="missionRow">
                <h1 className="missionHeader">What CERAMIX Can Do</h1>
                <Col xs={12} sm={3} md={3} lg={3} className="imgCol">
                    <img src={ceramixsketch} className="missionimage" alt="missionimage"/>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8} className="missionCol">
                    <p className="missionp">
                    In light of recent assaults on Asian Americans, the goal of CERAMIX is to form a bridge between polarized parties, Asian culture and American culture, using art as a medium. 
<br></br>
How?

CERAMIX provides a platform for unknown traditional Asian craftsmanship and its practitioners who are not financially able to gain global exposure. CERAMIX aims to educate people on the deep-rooted culture that Asian artists can offer on a global scale.

By showcasing the efforts and talent of Asian artists, CERAMIX communicates equality for all people.

As CERAMIX becomes a public platform, it will allow any artist to submit pieces that relate to the theme of the website, mixing vast art cultures.
                    </p>
                </Col>  
            </Row>
        </Container>
    )
}