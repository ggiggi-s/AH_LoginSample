import React, { Component } from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        {/* <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Form inline>
               <FormControl type="text"

                placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse> */}


        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
      Signed in as:
            {' '}
            <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
