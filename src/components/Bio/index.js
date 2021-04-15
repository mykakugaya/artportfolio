import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../images/lina.jpg";

function Bio() {
  return (
    <Container className="container">
        <Row classname="bioRow">
          <Col xs={12} sm={3} md={3} lg={3} className="imgCol">
            <img src={ProfilePic} className="bioimage"/>
          </Col>
          <Col xs={12} sm={8} md={8} lg={8} className="bioCol">
            <p className="biop">
            Hi, My name is Adelina Kugaya and I am a senior at Palos Verdes Peninsula High School. 
            I have been practicing ceramics for over 5 years and more recently have experimented with sculpting head figures. 
            In light of recent assaults on Asian Americans, my art has focused on forming a conceptual response to this threat. 
            Visible on the home page, I have produced sculptures of Asians among us that testify to the resilience of my race.
            </p>
          </Col>  
        </Row>
    </Container>
  );
}

export default Bio;
