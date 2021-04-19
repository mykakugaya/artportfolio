import React from "react";
import {Container, Jumbotron} from "react-bootstrap";
import "./style.css";

export default function ContactBanner(props){
    return(
        <Jumbotron fluid className="jumbotron">
            <Container>
                    <img src={props.img} alt="contactbanner" className="bannerimg" />
                    <div className="titleContainer">
                        <h3 className="bannertitle">{props.title}</h3>
                    </div>
            </Container>
        </Jumbotron>
    )
}