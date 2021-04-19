import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePic from "../../images/lina.jpg";

function Bio() {
  return (
    <Container className="container">

        <Row classname="bioRow">
          <Col xs={12} sm={9} className="bioCol">
            <h1 className="aboutmeTitle">About Me</h1>
            <p className="biop">
            Hi, my name is Adelina Kugaya and I am a senior at Palos Verdes Peninsula High School. I have been practicing ceramics for over 5 years, focusing on creating on the potter’s wheel. I have learning experience in Okayama, Japan, where potters create traditional Bizen-style ceramics. I had the opportunity to assist through the firing process using a noborigama, or step-climbing kiln. 
            More recently, I have experimented with sculpting head figures. Visible on the home page, I am producing clay sculptures of Asians among us that testify to the resilience of my race. My ongoing sculpture series combines gentle and elegant beauty with violent and degrading horror to signify the terror that comes with Asian American struggles.
            </p>
          </Col>  
          <Col xs={12} sm={3} className="imgCol">
            <img src={ProfilePic} className="bioimage" alt="bioimage"/>
          </Col>
        </Row>
    </Container>
  );
}

export default Bio;
