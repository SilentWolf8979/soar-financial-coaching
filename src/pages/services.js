import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services() {
    return (
      <div className="App">
        <div className='pageContent'>
          <h2>Services Offered</h2>
          <br />
          <Row>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/speaking'>Speaking Engagements</Link>
            </Col>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/debt-elimination'>Debt Elimination</Link>
            </Col>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/money-and-marriage'>Money and Marriage</Link>
            </Col>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/launching-into-adulthood'>Launching Into Adulthood</Link>
            </Col>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/custom'>Custom</Link>
            </Col>
            <Col xs={12} md={5} lg={3} className='cta ctaService'>
              <Link to='/services/fpu-classes'>Financial Peace University Classes</Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

export default Services;