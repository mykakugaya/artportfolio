import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import home1 from "../../images/home.JPG";

export default function Slideshow(){
    return(
        <Carousel fade>
        <Carousel.Item interval={2000}>
            <Image
            className="d-block w-100 hero-image"
            src={home1}
            alt="First slide"
            fluid
            />

            <Carousel.Caption>
            <h3 className="hero-text">Adelina Kugaya</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image
            className="d-block w-100 hero-image"
            src={home1}
            alt="Second slide"
            fluid
            />

            <Carousel.Caption>
            <h3 className="hero-text">Adelina Kugaya</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image
            className="d-block w-100 hero-image"
            src={home1}
            alt="Third slide"
            fluid
            />

            <Carousel.Caption>
            <h3 className="hero-text">Adelina Kugaya</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}