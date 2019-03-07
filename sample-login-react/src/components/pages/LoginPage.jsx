import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/login.css';
import { observer, inject } from 'mobx-react';


@inject('pageNavigation', 'user')
@observer
class LoginPage extends Component {
  state = {
    id: '',
    pw: '',
  }

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
    const { pageNavigation, user } = this.props;

    return (
      <div className="Login">

        <div className="HeaderLogin">
          Login into
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
              <Button
                variant="primary"
                // type="submit"
                id="button"
                onClick={() => user.login(this.state.id, this.state.pw)}
              >
              Sign in
              </Button>
              <Button variant="primary" id="button" onClick={() => pageNavigation.setState('SIGNUP')}>
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
