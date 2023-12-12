// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // Make sure to have this CSS file

import logo1 from '../img/logo2.png';

function Head() {
  // Function to create a Tooltip for each link
  const renderTooltip = (props, text) => (
    <Tooltip {...props}>
      {text}
    </Tooltip>
  );

  return (
    <Navbar expand="lg" className="navbar-light-pink">
      <Container fluid>
        <img src={logo1} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Add Tooltip to Home link */}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'Home')}
            >
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
            </OverlayTrigger>

            {/* Add Tooltip to About us link */}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'About us')}
            >
              <Nav.Link as={Link} to="/Aboutus" style={{ color: 'white' }}>About us</Nav.Link>
            </OverlayTrigger>

            {/* Add Tooltip to SignIn link */}
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'SignIn')}
            >
              <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>SignIn</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip(props, 'Order')}
            >
              <Nav.Link as={Link} to="/order" style={{ color: 'white' }}>Order</Nav.Link>
              </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
