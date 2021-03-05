import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomCoaching() {
  return (
    <div className="App">
      <div className='pageContent'>
        <Image src="../images/headShot.jpg"></Image>
        <h2>Custom Coaching</h2>
        <br/>
        <span className='breadcrumb'>
          <Link to='/'>Home</Link>
          <p>/</p>
          <Link to='/services'>Services Offered</Link>
        </span>
        <br/>
        <p>
          Here at Soar Financial Coaching, it is understood that every client has unique challenges, strengths, personalities, and goals. 
          The process of customized coaching is to help you define your dreams, assess where you are in the journey, 
          and make a plan that you can follow to get closer to whatever it is you envision for your future.
        </p>
        <p>
          Customized coaching is for you if you have a really big vision of your future and need to create large long-term targets to help you get there. 
          Coaching is also a good fit if you are stuck on one or two short-term issues that need worked out. Whatever your needs may be, the first step is the same. 
          Schedule your initial complimentary consultation today!
        </p>
        <br/>
        <Button href='/book'>Book Your Consultation</Button>
        <br/>
        <br/>
        <br/>
        <p className='quote'>
          Plans fail when there is no counsel, but they succeed when advisers are many.
        </p>
        <br/>
        <p className='quote'>  
          Proverbs 15:22
        </p>
      </div>
    </div>
  );
}

export default CustomCoaching;