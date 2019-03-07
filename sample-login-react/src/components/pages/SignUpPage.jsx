import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/signUp.css';
import axios from 'axios';

class SignUpPage extends Component {
  state = {
    id: '',
    pw: '',
  };

  signUp = () => {
    // console.log('id');
    const body = {
      username: this.state.id,
      password: this.state.pw,
    };
    axios.post('http://localhost:8080/user', body)
      .then(() => {
        alert('회원가입 성공!');
      })
      .catch(() => {
        console.log('get error!');
        // console.log(response);
        // this.number = 0;
      });
  };

  inputIdChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      id: e.target.value,
    });
  };

  inputPwChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      pw: e.target.value,
    });
  };

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
              <Form.Control type="id" placeholder="username" onChange={this.inputIdChangeHandler} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={this.inputPwChangeHandler} />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit" id="button" onClick={this.signUp}>
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
