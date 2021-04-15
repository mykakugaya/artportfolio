import React from "react";
import BannerImage from "../components/BannerImage";
import {Container} from "react-bootstrap";
import aboutbanner from "../images/aboutbanner.jpg";
import Bio from "../components/Bio";

function About() {
    return(
    <Container style={{top:"0!important",padding:"0"}}>
        <BannerImage title="ABOUT" img={aboutbanner}/>
        <Bio/>
    </Container>
    );  
}

export default About;