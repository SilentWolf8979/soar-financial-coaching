import { Button, Image } from 'react-bootstrap';
import Breadcrumbs from '../../components/breadcrumbs.js';

function Speaking() {
  return (
    <div className="App">
      <div className='pageContent'>
        <div className='margin'>
          <Image src="../images/ctaPeopleAtTable.jpg"></Image>
          <h2>Speaking Engagements</h2>
          <br/>
          <Breadcrumbs/>
          <br/>
          <p>
            The first time I learned the basics of budgeting was at a MOPS (Mothers of Pre-Schoolers) meeting. 
            One of our members came in and talked about how she and her husband were taking an intentional approach with their money 
            and the positive difference it was making in their life and marriage. 
            I left that meeting excited to know there was an alternate method of handling money and was filled with a desire to become a better steward of what God had given us. 
            I also left feeling unsure of how to get started.
          </p>
          <p>
            With no further direction, it took many more years before my husband and I really got going. 
            Unfortunately, we made a lot of poor financial decisions in the meantime, but I still look back gratefully on that initial introduction to a lifestyle that prioritizes financial responsibility and stability. 
            That MOPS speaker lit a light within me that grew over the years until my husband and I finally looked at one another and said, “Enough. We must make a change.”
          </p>
          <p>
            Now, whether I am serving as that “first voice” for someone in the audience, teaching the basics of being intentional with money, 
            or facilitating discussions that stretch my listeners into a new way of thinking, I feel honored to be making an impact on the community around me.
          </p>
          <p>
            If you are interested in having me come speak to your small group at church, local moms group, engaged couples retreat, employees, 
            or any other group you think would enjoy these talks, email Soar Financial Coaching today to schedule your event.
          </p>
          <br/>
          <Button href='mailto:SoarFinancialcoaching@gmail.com' className='btnEmail'>E-Mail Me</Button>
        </div>
        <br/>
        <div className='quote'>
          <p>
            "And what you heard from me through many witnesses entrust to faithful people who will have the ability to teach others as well."
          </p>
          <p className='quoteReference'>
            2 Timothy 2:2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speaking;