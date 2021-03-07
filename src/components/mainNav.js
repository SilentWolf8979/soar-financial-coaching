import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from '../images/icons/eagle.svg';

function MainNav() {
  return (
    <Navbar expand='' fixed='top' className='justify-content-left'>
      <div className='header justify-content-center'>
        <p>Reflect.&nbsp;&nbsp;&nbsp;Learn.&nbsp;&nbsp;&nbsp;Grow.&nbsp;&nbsp;&nbsp;Soar.</p>
      </div>
      <div className='navbarFull'>
        <Navbar.Toggle aria-controls='main-navbar-nav' id='navbarToggler'>
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Brand href="/">
          <Logo
            alt="Soar Financial Coaching"
            className="d-inline-block align-top App-logo"
            fill="#7fa67a"
          />
          <p className='d-none d-sm-block float-right'>Soar Financial Coaching</p>
        </Navbar.Brand>
        <Button href='/book' className='float-right'>Book Your Consultation</Button>
      </div>
      <Navbar.Collapse id='main-navbar-nav'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/book'>Book Your Complimentary Consultation</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
          <Nav.Link href='/whatIs'>What Is A Financial Coach?</Nav.Link>
          <Nav.Link href='/content'>Content</Nav.Link>
          <Nav.Link href='/services'>Services Offered</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav;
