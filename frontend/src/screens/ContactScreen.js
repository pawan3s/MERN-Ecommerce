import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import contact from "../image/contact.png";

const ContactScreen = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Row>
        <Col md={6}>
          <img className='d-block w-100' src={contact} alt='contact-img' />
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId='name'>
              <Form.Label>
                <i className='fas fa-user'></i> Name:{" "}
              </Form.Label>
              <Form.Control type='text' placeholder='Enter Your name' />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>
                <i className='fas fa-envelope-square'></i> Email address
              </Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='text'>
              <Form.Label>
                <i className='fas fa-pen'></i> Message
              </Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>

            <Button
              type='submit'
              variant='success'
              className='signin-btn'
              block
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactScreen;
