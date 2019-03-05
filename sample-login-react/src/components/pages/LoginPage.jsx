import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/login.css';
import { observer, inject } from 'mobx-react';
import axios from 'axios';


@inject('pageNavigation')
@observer
class LoginPage extends Component {
  state = {
    id: '',
    pw: '',
  }

  login = () => {
    // console.log('id');
    const body = {
      username: this.state.id,
      password: this.state.pw,
    };
    axios.post('http://localhost:8080/user/login', body)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        // console.log(response);
        // this.number = 0;
      });
  };

  inputIdChangeHandler=(e) => {
    console.log(e.target.value);
    this.setState({
      id: e.target.value,
    });
  }

  inputPwChangeHandler=(e) => {
    console.log(e.target.value);
    this.setState({
      pw: e.target.value,
    });
  }

  render() {
    const { pageNavigation } = this.props;

    return (
      <div className="Login">

        <div className="HeaderLogin">
          Login into
          <br />
        </div>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="username" onChange={this.inputIdChangeHandler} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={this.inputPwChangeHandler} />
            </Form.Group>
            {/* <Form.Group controlId="formBasicChecbox"> */}
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
            {/* </Form.Group> */}
            <div>
              <Button variant="primary" type="submit" id="button" onClick={this.login}>
              Sign in
              </Button>
              <Button variant="primary" type="submit" id="button" onClick={() => pageNavigation.setState('SIGNUP')}>
              Sign up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
export default LoginPage;
