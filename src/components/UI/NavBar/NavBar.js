import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../../../src/logo.png'

const navBar = ({ title, user }) => (
  <Navbar bg="dark" variant="dark" >
    <StyledNavbarBrand href="/">
    <img src={Logo} alt="Logo" />
      {title}
    </StyledNavbarBrand>
    <Nav className="justify-space-between">
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/add">Add Employee</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <StyledNavbarText>
        Signed in as : <a href="#login">{user}</a>
      </StyledNavbarText>
    </Navbar.Collapse>
  </Navbar>
);

const StyledNavbarBrand = styled(Navbar.Brand)`
  font-size: 2em;
`;

const StyledNavbarText = styled(Navbar.Text)`
  font-size: 1em;
  padding-right: 20px;
`;


export default navBar;
