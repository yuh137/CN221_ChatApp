import React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css'

function Signup() {
  return (
    <Container>
      <Row>
        <Col md={5} className="signup__bg"></Col>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{width: "80%", maxWidth: 500}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signup
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already signed up?
                <Link style={{display: "inline-block", marginLeft: "4px"}} to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup