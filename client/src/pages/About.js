import React from "react";
import BannerImage from "../components/BannerImage";
import {Container} from "react-bootstrap";
import aboutbanner from "../images/aboutbanner.jpg";
import Bio from "../components/Bio";
import Mission from "../components/Mission";

function About() {
    return(
    <Container style={{top:"0!important",padding:"0"}}>
        <BannerImage title="MISSION" img={aboutbanner}/>
        <Mission/>
        <Bio/>
    </Container>
    );  
}

export default About;