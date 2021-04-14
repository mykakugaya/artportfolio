import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Contact.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

function Contact() {

    return(
    <Container >
        <Row>
        <Col  className="biolinks" xs={12} sm={12} md={6} lg={6}>
            <p><MailOutlineIcon/> Email: <span className="bluetext">linakug0402@gmail.com</span>
              <br></br>
              <PhoneOutlinedIcon/> Phone Number: <span className="bluetext">(424) 404-0303</span>
              <br></br>
              </p>
              </Col>
        </Row>
        
    </Container>
    );  
}

export default Contact;