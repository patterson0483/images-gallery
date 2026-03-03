import React from 'react';
import { Navbar } from "react-bootstrap";

// const Header = (props) => {
  const Header = ({ title }) => { 
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
}

export default Header;