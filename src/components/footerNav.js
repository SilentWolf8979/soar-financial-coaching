import React from "react";
import { Row, Col, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/icons/eagle.svg';

function FooterNav() {
    return (
      <div className='footerNav'>
        <Row>
          <Col xs={4} md={2}>
            <a href='/' className='logoLink'>
              <Logo
                alt="Soar Financial Coaching"
                className="d-inline-block align-top App-logo"
                fill="#7fa67a"
              />
            </a>
          </Col>
          <Col xs={8} md={10}>
            <Row>
              <Col xs={6} md={3} className='text-center'>
                <Nav.Link href='/contact'>Contact</Nav.Link>
              </Col>
              <Col xs={6} md={3} className='text-center'>
                <Nav.Link href='/about'>About</Nav.Link>
              </Col>
              <Col xs={6} md={3} className='text-center'>
                <Nav.Link href='/whatIs'>What Is A Financial Coach?</Nav.Link>
              </Col>
              <Col xs={6} md={3} className='text-center'>
              <Nav.Link href='/bio'>My Bio</Nav.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

export default FooterNav;