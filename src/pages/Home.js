import React from "react";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow"
import Gallery from "../components/Gallery";
import {Container, Row, Col} from "react-bootstrap";

function Home() {
    return(
    <Container>
        <Row item xs={12}>
            <Hero/>
            {/* <Slideshow /> */}
        </Row>
        <Row item xs={12}>
            <Gallery/>
        </Row>
    </Container>
    );  
}

export default Home;