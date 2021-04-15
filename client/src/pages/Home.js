import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import {Container, Row} from "react-bootstrap";

function Home() {
    return(
    <Container>
        <Row item xs={12}>
            <Hero/>
        </Row>
        <Row item xs={12}>
            <Gallery/>
        </Row>
    </Container>
    );  
}

export default Home;