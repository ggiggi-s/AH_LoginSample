import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/signUp.css';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignIn">

        <div className="HeaderLogin">
          Sign up
          <br />
        </div>

        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            <div>
              <Button variant="primary" type="submit" id="button">
              Sign in
              </Button>

            </div>
          </Form>
        </div>

      </div>
    );
  }
}
export default SignUpPage;
