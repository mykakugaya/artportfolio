import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Contact.css";
import SendIcon from '@material-ui/icons/Send';
import aboutbanner from "../images/aboutbanner.jpg";
import ContactBanner from "../components/ContactBanner";

export default class Contact extends Component {
  state = {
    name: null,
    email: null,
    message: null,
    sent: false
  }

  // handle input changes
  onNameChange(e) {
  this.setState({name: e.target.value})
  }

  onEmailChange(e) {
  this.setState({email: e.target.value})
  }

  onMessageChange(e) {
  this.setState({message: e.target.value})
  }
  
  // handle form submit
  handleSubmit(event) {
    event.preventDefault();
    
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post("/api/sendMail", data)
    .then((response)=>{
      this.setState({
        sent: true
      },this.resetForm());
      console.log("Message sent successfully.");
    }).catch(() => {
      console.log("Message failed to send.");
    })
  }

  resetForm = () => {
    this.setState({name: "", email: "", message: ""});
    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 3000);
  }
  
  render() {
    return (
      <Container className="contactbackground">
        <ContactBanner title="CONTACT" img={aboutbanner}/>
        <div>
          <h1 className="contact">Contact Us</h1>
          <p className="contactdesc">For more information or to contribute to our page!</p>
        </div>
          <Form className="form" onSubmit={this.handleSubmit.bind(this)} action="/sendMail" method="POST">
            <Form.Group controlId="name">
              <Form.Label className="label">Name</Form.Label>          
              <Form.Control
                id="nameinput"
                className="messageinput"
                type="name"
                placeholder="Name"
                placeholderTextColor= 'gray'
                value={this.state.name} 
                onChange={this.onNameChange.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label className="label">Email</Form.Label> 
              <Form.Control
                id="emailinput"
                className="messageinput"
                type="email"
                placeholder="Email"
                placeholderTextColor= 'gray'
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label className="label">Message</Form.Label> 
              <Form.Control
                id="messageinput"
                className="messageinput"
                as="textarea"
                type="message"
                placeholder="Message"
                placeholderTextColor= 'gray'
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </Form.Group>
            {this.state.sent ? <p>Message sent successfully.</p> : <p></p>}
            <Button variant="outline-primary" type="submit" className="sendBtn btn btn-outline-primary" onClick={this.handleSubmit.bind(this)}>
              <SendIcon className="sendIcon"/><p className="sendMsg">Send Message</p>
            </Button>
          </Form>
      </Container>
    );
  }
}
