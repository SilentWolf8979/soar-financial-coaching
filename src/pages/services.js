import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="App">
      <div className='pageContent'>
        <div className='narrowMargin'>
          <br/>
          <h2 className='fontColor'>Services Offered</h2>
          <br/>
          <Row className='justify-content-center'>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
                <Link to='/services/money-and-marriage' className='title'>Money and Marriage</Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
                <Link to='/services/debt-elimination' className='title'>Debt Elimination</Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
                <Link to='/services/launching-into-adulthood' className='title'>Launching Into Adulthood</Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
                <Link to='/services/custom-coaching' className='title'>Custom Coaching</Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
              <Link to='/services/speaking' className='title'>Speaking Engagements</Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className='mb-3'>
              <div className='cta ctaService'>
                <Link to='/services/financial-peace-university' className='title'>Financial Peace University</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Services;
