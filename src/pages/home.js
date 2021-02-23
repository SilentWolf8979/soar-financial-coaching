import { Button, Col, Image, Row } from 'react-bootstrap';

function Home() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Gain control of your money</h1>
          <p>Start your journey toward freedom today</p>
          <br/>
          <Button href='/book'>Book Your Consultation</Button>
        </div>

        <div className='homeContent'>
          <Row className='justify-content-center'>
            <Col xs={10} sm={3} className='cta'>
              <p>Freedom<br/>to<br/>Dream</p>
            </Col>
            <Col xs={10} sm={3} className='cta'>
              <p>Freedom<br/>to<br/>Save</p>
            </Col>
            <Col xs={10} sm={3} className='cta'>
              <p>Freedom<br/>to<br/>Give</p>
            </Col>
          </Row>
          
          <br/>
          <br/>
          <br/>

          <h3>Steps to Success</h3>
          <br/>
          <Row className='justify-content-center'>
            <Col xs={10} sm={4} className='ctaSteps'>
              <Image src="../images/art/sketchNumeral1.svg"></Image>
              <br/>
              <p className='heading'>Discover</p>
              <br/>
              <p>
                Book your FREE consultation.
                Your initial consultation is our chance to get to know one another and see if coaching is right for you. 
                <br/>No judgement. No guilt.<br/>No commitment.
              </p>
            </Col>
            <Col xs={10} sm={4} className='ctaSteps'>
              <Image src="../images/art/sketchNumeral2.svg"></Image>
              <br/>
              <p className='heading'>Dive In</p>
              <br/>
              <p>
                After your consultation, the next step is to schedule your coaching sessions and simply get started. 
                You may have tried tackling financial goals before and fallen short. This time, though, you’re not alone. 
                You have a partner who believes in YOU. And that can make all the difference.
              </p>
            </Col>
            <Col xs={10} sm={4} className='ctaSteps'>
              <Image src="../images/art/sketchNumeral3.svg"></Image>
              <br/>
              <p className='heading'>Dream and Do</p>
              <br/>
              <p>
                During your sessions we will reflect on where you’ve been, learn new skills and knowledge, 
                grow in confidence and practice healthy money behaviors, and soar toward your dreams!
              </p>
            </Col>
          </Row>

          <Button href='/book'>Book Your Consultation</Button>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          <Row className='justify-content-center'>
            <Col xs={12} md={5} lg={4} className='ctaImage'>
              <Image src="../images/ctaMaleWithHeadache.jpg"></Image>
            </Col>
            <Col xs={12} md={6} lg={7} className='ctaTextOnly'>
              <p>Money problems are stressful.</p>
              <p>No one likes hiding from creditors.</p>
              <p>It's time to take a stand.</p>
              <br/>
              <Button href='/book'>Book Your Consultation</Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

export default Home;