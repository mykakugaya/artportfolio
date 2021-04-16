import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import MyArt from "../components/MyArt";
import {Container, Row} from "react-bootstrap";

function Home() {
    return(
    <Container>
        <Hero/>
        <Gallery/>
        <MyArt/>
    </Container>
    );  
}

export default Home;