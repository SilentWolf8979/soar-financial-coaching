import { Button, Image } from 'react-bootstrap';
import Breadcrumbs from '../../components/breadcrumbs.js';

function FinancialPeaceU() {
  return (
    <div className="App">
      <div className='pageContent'>
        <Image src="../images/ctaHandcuffs.jpg"></Image>
        <h2>Financial Peace University</h2>
        <br/>
        <Breadcrumbs/>
        <br/>
        <p className='center'>
          Are you looking for someone to teach Dave Ramsey’s <u>Financial Peace University</u> at your church or organization? 
          <br/> 
          You’ve come to the right place!  
        </p>
        <p>
          My husband and I took the class years ago and used Dave Ramsey’s step by step process to get out of debt, 
          freeing us up to be better stewards of the financial resources with which He has seen fit to bless us. 
          Now, I am a trained financial coach with a passion for guiding others toward financial freedom!
        </p>
        <p>
          Contact me to create your FPU class today!
        </p>
        <br/>
        <Button href='mailto:SoarFinancialcoaching@gmail.com' className='btnEmail'>E-Mail Me</Button>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default FinancialPeaceU;