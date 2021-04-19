import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./style.css";
import s1 from "../../images/s1.jpg";
import s2 from "../../images/s2.jpg";
import s3 from "../../images/s3.png";
import s4 from "../../images/sculpture.jpg";
import icon1 from "../../images/takushitakahara.png";
import icon2 from "../../images/masamisakamoto.jpg";
import icon3 from "../../images/takumisakamoto.jpg";
import icon4 from "../../images/heartlogoofficial.jpg";

function Gallery() {
    return(
        <Container>
            <Row className="justify-content-md-center imgRow">
                <Col xs={12} sm={4} className="imgCol">
                <Image src={s1} alt="sensei1" className="gallerypic left" thumbnail/>
                </Col>
                <Col xs={12} sm={7} className="infoCol">
                    <img src={icon1} alt="icon1" className="iconPic left"/>
                    <p className="desc">Name: Takushi Takahara<br/>
                    Phone Number: +81 869 64 2453<br/>
                    Location: 970-2 Imbe, Bizen City, Okayama Prefecture 705-0001 Japan</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center imgRow">
                <Col xs={12} sm={4} className="imgCol">
                <Image src={s2} alt="sensei2" className="gallerypic left" thumbnail/>
                </Col>
                <Col xs={12} sm={7} className="infoCol">
                    <img src={icon2} alt="icon2" className="iconPic left"/>
                    <p className="desc">Name: Masami Sakamoto<br/>
                    Phone Number: +81 973 29 2405<br/>
                    Location: 143 Motoemachi, Hita City, Ooita Prefecture 877-1241 Japan</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center imgRow">
                <Col xs={12} sm={4} className="imgCol">
                <img src={s3} alt="sensei3" className="gallerypic left"/>
                </Col>
                <Col xs={12} sm={7} className="infoCol">
                    <Image src={icon3} alt="icon3" className="iconPic left" thumbnail/>
                    <p className="desc">Name: Takumi Sakamoto<br/>
                    Phone Number: +81 973 29 2404<br/>
                    Location: 176 Motoemachi, Hita City, Ooita Prefecture 877-1241 Japan</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center imgRow">
                <Col xs={12} sm={4} className="imgCol">
                <img src={s4} alt="lina1" className="gallerypic left"/>
                </Col>
                <Col xs={12} sm={7} className="infoCol">
                    <Image src={icon4} alt="icon4" className="iconPic left" thumbnail/>
                    <p className="desc">Name: Adelina Kugaya<br/>
                    Phone Number: +1 424 404 0303<br/>
                    Location: Rancho Palos Verdes, CA 90275</p>
                </Col>
            </Row>

        </Container>
    )
}

export default Gallery;