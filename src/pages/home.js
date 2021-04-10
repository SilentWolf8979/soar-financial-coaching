import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <Col xs={10} sm={3} className='cta ctaService ctaServiceLarge align-items-center'>
            <div className='mx-auto fullLink'>
              <Link to='/services' className='title'>Freedom<br/>to<br/>Dream</Link>
            </div>
          </Col>
          <Col xs={10} sm={3} className='cta ctaService ctaServiceLarge align-items-center'>
            <div className='mx-auto fullLink'>
              <Link to='/services' className='title'>Freedom<br/>to<br/>Save</Link>
            </div>
          </Col>
          <Col xs={10} sm={3} className='cta ctaService ctaServiceLarge align-items-center'>
            <div className='mx-auto fullLink'>
              <Link to='/services' className='title'>Freedom<br/>to<br/>Give</Link>
            </div>
          </Col>
        </Row>
        
        <br/>
        <br/>
        <br/>

        <Row className='justify-content-center'>
          <Col xs={12} className='ctaTextOnly'>
            <h2>Coaching = Empowerment</h2>
            <br/>
            <p className='fontLarger'>
              If all you needed to be successful was information, a simple search of the internet will get you tens of thousands of resources and opinions. 
              Talk about overwhelming!
            </p>
            <p className='fontLarger'>
              But financial specialists know that to be successful with money, you need both the know-how and healthy money habits.
            </p>
            <p className='fontLarger'>
              Take advantage of the coaching we offer to give yourself the boost you need to grow in understanding, improve communication with your spouse, 
              give voice to your dreams, and create a plan to make them all a reality!
            </p>
            <br/>
            <p className='fontLarger'>
              It’s time to discover your best self!
            </p>
          </Col>
        </Row>

        <br/>
        <br/>
        <br/>

        <h3>Steps to Success</h3>
        <br/>
        <Row className='justify-content-center'>
          <Col xs={10} sm={4} className='ctaSteps'>
            <Image src="../images/art/sketchNumeral1.svg" alt="Step 1"></Image>
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
            <Image src="../images/art/sketchNumeral2.svg" alt="Step 2"></Image>
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
            <Image src="../images/art/sketchNumeral3.svg" alt="Step 3"></Image>
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
        
        <Row className='justify-content-center fullWidth'>
          <Col xs={12} md={5} lg={4} className='ctaImage'>
            <Image src="../images/ctaMaleWithHeadache.jpg" alt="Man With Headache"></Image>
          </Col>
          <Col xs={12} md={7} lg={7} className='ctaTextOnly d-flex align-items-center'>
            <div className='mx-auto'>
              <p>Money problems are stressful.</p>
              <p>No one likes hiding from creditors.</p>
              <p>It's time to take a stand.</p>
            </div>
          </Col>
        </Row>

        <br/>

        <Row className='justify-content-center'>
          <Col xs={12} className='ctaTextOnly'>
            <h4>
              Coaches understand that being the best you can be requires preparation, <br/>
              a strong defense, and an equally strong offense.<br/>
              <i><b>Finance is no different.</b></i>
            </h4>
          </Col>
        </Row>
        <Row className='align-items-center justify-content-center text-left'>
          <Col xs={12} md={7}>
            <Row>
              <Col>
                <p>
                  <b>Preparation:</b> Most people think that a “budget” is a weight dragging them into the depths of sacrifice and no fun. 
                  That’s a big, fat myth! Budgets are simply maps that tell your money where to go. It is your plan! No one creates it but you, 
                  so if you want to build in some fun, a budget is the best way to do that guilt-free!
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Defense:</b> Defending yourself against debt or working to pay off current loans helps your money remain YOUR money. 
                  You work far too hard to be paying all of your income to debtors.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>Offense:</b> Scoring the goal is the most exciting time of the game! Once you are working your plan and your debt is gone, 
                  it is time to save and invest and let compound interest work in your favor. Enjoy this stage of wealth building and ridiculously generous giving!
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={5} className='ctaImage hideSmall'>
            <Image src="../images/ctaBlueFootball.jpg" alt="Football Image"></Image>
          </Col>
        </Row>
        <Row className='justify-content-center text-left'>
          <Col xs={12} className='ctaImage hideLarge'>
            <Image src="../images/ctaBlueFootball.jpg" alt="Football Image"></Image>
          </Col>
        </Row>

        <br/>

        <Button href='/book'>Book Your Consultation</Button>
      </div>
    </div>
  );
}

export default Home;
