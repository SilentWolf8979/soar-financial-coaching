import React from "react";
import { Row, Col, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/icons/eagle.svg';

function FooterNav() {
  return (
    <div className='footerNav'>
      <Row>
        <Col xs={4} sm={2}>
          <a href='/' className='logoLink'>
            <Logo
              alt="Soar Financial Coaching"
              className="d-inline-block align-top App-logo"
              fill="#7fa67a"
            />
          </a>
        </Col>
        <Col xs={8} sm={10}>
          <Row>
            <Col xs={6} sm={4} md={2} className='text-center'>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Col>
            <Col xs={6} sm={4} md={2} className='text-center'>
              <Nav.Link href='/about'>About</Nav.Link>
            </Col>
            <Col xs={6} sm={4} md={2} className='text-center'>
              <Nav.Link href='/content'>Content</Nav.Link>
            </Col>
            <Col xs={6} sm={4} md={4} className='text-center'>
              <Nav.Link href='/whatIs'>What Is A Financial Coach?</Nav.Link>
            </Col>
            <Col xs={6} sm={4} md={2} className='text-center'>
            <Nav.Link href='/legal'>Legal</Nav.Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FooterNav;