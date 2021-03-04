import { Button, Image } from 'react-bootstrap';

function LaunchingAdulthood() {
  return (
    <div className="App">
      <div className='pageContent'>
        <Image src="../images/headShot.jpg"></Image>
        <h2>Launching Into Adulthood</h2>
        <br/>
        <p>
          Launching Into Adulthood is coaching intended for high school and college students as well as young adults who opt for alternate pathways to the workforce. 
          This kind of coaching can be done one-on-one or in small groups of up to 4 students.
        </p>
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
        <br/>
        <br/>
        <br/>
        <p className='quote'>
          The child grew and became strong, filled with wisdom; and the favor of God was upon him.
        </p>
        <br/>
        <p className='quote'>
          Luke 2:40
        </p>
        <br/>
        <br/>
        <p className='quote'>
          When I was a child, I used to talk as a child, think as a child, reason as a child; when I became a man, I put aside childish things.
        </p>
        <br/>
        <p className='quote'>  
          1 Corinthians 13:11
        </p>
      </div>
    </div>
  );
}

export default LaunchingAdulthood;