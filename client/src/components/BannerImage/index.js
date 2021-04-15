import React from "react";
import {Container, Jumbotron} from "react-bootstrap";
import "./style.css";

export default function BannerImage(props){
    return(
        <Jumbotron fluid className="jumbotron">
            <Container>
                    <img src={props.img} alt="aboutbanner" className="bannerimg" />
                    <div className="titleContainer">
                        <h3 className="title">{props.title}</h3>
                    </div>
            </Container>
        </Jumbotron>
    )
}