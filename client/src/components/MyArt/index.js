import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import sculpture from "../../images/sculpture.jpg";
import "./style.css";

export default function MyArt(){
    return(
        <Container>
            <Row>
                <Image src={sculpture} alt="sculpture1" className="sculptureimage"/>
            </Row>
        </Container>
    )
}