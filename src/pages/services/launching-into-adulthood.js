import { Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/breadcrumbs.js';

function LaunchingAdulthood() {
  return (
    <div className="App">
      <Helmet>
        <title>Soar Financial Coaching - Services Offered - Launching Into Adulthood</title>
      </Helmet>
      <div className='pageContent'>
        <div className='margin'>
          <Image src="../images/ctaGradOnSidewalk.jpg" className='vertical'></Image>
          <h2>Launching Into Adulthood</h2>
          <Breadcrumbs/>
          <p>
            Launching Into Adulthood is coaching intended for high school and college students as well as young adults who opt for alternate pathways to the workforce. 
            This kind of coaching can be done one-on-one or in small groups of up to 4 students.
          </p>
          <br/>
          <ul>
            <li>Explore current attitudes about money</li>
            <li>Set realistic expectations of lifestyle</li>
            <li>Discover how your priorities affect your finances. . .and how your financial health affects your priorities</li>
            <li>Learn to set short-term and long-term goals</li>
            <li>Simplify the basics of budgeting and other financial buzzwords</li>
            <li>Gain an understanding of the impact that today’s choices will make on your tomorrow</li>
            <li>Grow in confidence in your ability to move through this world as an independent adult</li>
          </ul>
          <br/>
          <Button href='/book'>Book Your Consultation</Button>
        </div>
        <br/>
        <div className='quote'>
          <p>
            "The child grew and became strong, filled with wisdom; and the favor of God was upon him."
          </p>
          <p className='quoteReference'>
            Luke 2:40
          </p>
          <br/>
          <p>
            "When I was a child, I used to talk as a child, think as a child, reason as a child; when I became a man, I put aside childish things."
          </p>
          <p className='quoteReference'>  
            1 Corinthians 13:11
          </p>
        </div>
      </div>
    </div>
  );
}

export default LaunchingAdulthood;