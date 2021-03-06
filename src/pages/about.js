import { Image } from 'react-bootstrap';

function About() {
  return (
    <div className="App">
      <div className='pageContent'>
        <div className='margin'>
          <Image src="../images/headShot.jpg"></Image>
          <h2>About Me</h2>
          <br/>
          <p>
            Finances are challenging even for those who had a terrific upbringing and experienced healthy attitudes toward money in the home growing up. 
            For those who didn’t, money management and wealth building are even harder.   
          </p>
          <p>
            My husband and I thought we were pretty good with money, but as our family grew and we took on more responsibilities as adults, 
            we started to flounder and make some poor choices. Those poor choices caused stress and anxiety. We realized that we were not on the road that we thought we were on. 
            Just because we weren’t fighting about money didn’t mean we were working as a team. It simply meant that we were avoiding the topic all together. 
            Not good! It wasn’t until we took Dave Ramsey’s Financial Peace University years ago that we really started learning how to communicate, prioritize, and plan for our finances. 
            Money behaviors can be hard to change, so we had to dig our way out of debt not once, but twice! Now, my husband and I are unified. 
            When we are moving together toward the same goals and dreams, we are unstoppable. It’s empowering! I want you to enjoy that same strength in your marriage and if you are single, 
            in yourself, that we enjoy today.
          </p>
          <p>
            God created me to have a unique balance of creativity and analytical thinking. My analytical side assists me in seeing the numbers and understanding the actual money knowledge. 
            My background as a teacher allows me to break those concepts down into understandable, bite-sized chunks for my clients. 
            It is my creative side that helps me address the behaviors and attitudes that might be getting in your way of success. 
            I absolutely love people and hearing their stories. Life is often messy, but we grow by facing our challenges. When we knock down those challenges one by one, we build ourselves up,
            eventually growing into a masterpiece.
          </p>
          <p>
            By day, I am a music teacher, plus a mom of five (including teenagers-pray for me!), so don’t be fooled into thinking that making excuses will work on me. 
            I understand when you need grace and when you need a kick in the rump to get moving in the right direction! I am generous with praise and take great joy in building confidence in others. 
            If that’s the kind of coach you’re looking for, then give me a call and let’s get started!
          </p>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='quote'>
        <p>
          "She is clothed with strength and dignity, and laughs at the days to come.
        </p>
        <p>
          She opens her mouth in wisdom; kindly instruction is on her tongue.
        </p>
        <p>
          She watches over the affairs of her household, and does not eat the bread of idleness.
        </p>
        <p>
          Her children rise up and call her blessed; her husband, too, praises her.
        </p>
        <p>
          'Many are the women of proven worth, but you have excelled them all.'
        </p>
        <p>
          Charm is deceptive and beauty fleeting; the woman who fears the Lord is to be praised.
        </p>
        <p>
          Acclaim her for the work of her hands, and let her deeds praise her at the city gates."
        </p>
        <p className='quoteReference'>
          Proverbs 31:25-31
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
