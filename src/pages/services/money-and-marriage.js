import { Button, Image } from 'react-bootstrap';
import Breadcrumbs from '../../components/breadcrumbs.js';

function MoneyMarriage() {
  return (
    <div className="App">
      <div className='pageContent'>
        <div className='margin'>
          <Image src="../images/ctaCoupleHoldingHands.jpg"></Image>
          <h2>Money And Marriage</h2>
          <Breadcrumbs/>
          <p>
            Engaged? Newlyweds?  
            Getting remarried and know the damage that money issues can cause? 
            Maybe you have a few years of marriage behind you but are ready to grow in new ways. 
            Our “Money and Marriage” coaching is for you!
          </p>
          <br/>
          <ul>
            <li>Explore past experiences and attitudes about money.</li>
            <li>Take an honest look at your current spending habits and priorities.</li>
            <li>Evaluate your current methods of communication and if necessary, develop new habits that purposefully support a lifetime of marriage.</li>
            <li>Learn to dream beyond this next stage in life and set goals that you can work on together.</li>
            <li>Develop strategies to prepare for the unexpected seasons of life.</li>
            <li>Set in place mutual principles that will help guide your money decisions throughout your marriage.</li>
          </ul>
          <br/>
          <Button href='/book'>Book Your Consultation</Button>
        </div>
        <br/>
        <div className='quote'>
          <p>
            “Owe nothing to anyone, except to love one another; for the one who loves another has fulfilled the law.”
          </p>
          <p className='quoteReference'>
            Romans 13:8
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoneyMarriage;