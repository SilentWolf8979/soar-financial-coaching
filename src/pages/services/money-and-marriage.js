import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MoneyMarriage() {
  return (
    <div className="App">
      <div className='pageContent'>
        <Image src="../images/headShot.jpg"></Image>
        <h2>Money And Marriage</h2>
        <br/>
        <span className='breadcrumb'>
          <Link to='/'>Home</Link>
          <p>/</p>
          <Link to='/services'>Services Offered</Link>
        </span>
        <br/>
        <p className='center'>
          Engaged? Newlyweds?  
        </p>
        <p className='center'>
          Getting remarried and know the damage that money issues can cause? 
          Maybe you have a few years of marriage behind you but are ready to grow in new ways. 
          Our “Money and Marriage” coaching is for you!
        </p>
        <ul>
          <li>Explore past experiences and attitudes about money.</li>
          <li>Take an honest look at your current spending habits and priorities.</li>
          <li>Evaluate your current methods of communication and if necessary, develop new habits that purposefully support a lifetime of marriage.</li>
          <li>Learn to dream beyond this next stage in life and set goals that you can work on together.</li>
          <li>Develop strategies to prepare for the unexpected seasons of life.</li>
          <li>Set in place mutual principles that will help guide your money decisions throughout your marriage.</li>
        </ul>
        <p className='quote'>
          “Owe nothing to anyone, except to love one another; for the one who loves another has fulfilled the law.”
        </p>
        <br/>
        <p className='quote'>
          Romans 13:8
        </p>
      </div>
    </div>
  );
}

export default MoneyMarriage;