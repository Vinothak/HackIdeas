import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../../../src/logo.png'

const navBar = ({ user }) => (
  <Navbar bg="dark" variant="dark" >
    <StyledNavbarBrand href="/">
    <img src={Logo} alt="Logo" />
    </StyledNavbarBrand>
    <Nav className="justify-space-between">
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/add">Add Ideas</Nav.Link>
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
