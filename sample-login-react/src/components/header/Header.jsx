import React, { Component } from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import Button from 'react-bootstrap/Button';
import HeaderNavigation from './HeaderNavigation';

@inject('pageNavigation')
@observer
class Header extends Component {
  render() {
    const { pageNavigation } = this.props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>


        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
      Signed in as:

            <Button
              className="HeaderUserName"
              variant="link"
              onClick={() => pageNavigation.setState('LOGIN')}
            >
              <HeaderNavigation />

            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
