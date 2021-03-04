import { Button, Image } from 'react-bootstrap';

function DebtElimination() {
    return (
      <div className="App">
        <div className='pageContent'>
          <Image src="../images/ctaHandcuffs.jpg"></Image>
          <h2>Debt Elimination</h2>
          <br/>
          <p>
            Watching your paycheck handed out to creditors stinks! Owing money to others can make you feel like you can never get ahead. 
            Emergencies are more stressful. Wealth building seems like an impossible task. You know that if you don’t start now, 
            the hole will be even bigger by this time next year.
          </p>
          <p>
            My husband and I know the stress that comes with being in debt. . .and we know the freedom that comes with getting out of it. 
            Let me walk with you as you learn how to release the shackles by kicking them to the curb one by one! 
            Just <i>imagine</i> how proud you will feel to be standing in the light of that accomplishment. 
            Before you know it, you won’t just be imagining it, you’ll be <i>living</i> it!
          </p>
          <ul>
            <li>Learn the tools you need to effectively deal with creditors.</li>
            <li>Discover why past attempts to pay down your debt have failed so you can learn from that knowledge and move forward confidently.</li>
            <li>Create a clear plan to pay off your debt - big or small - that is simple and manageable. This process does not mean you can no longer enjoy life! True, purpose-filled intentionality is freeing, not constraining.</li>
            <li>Find the encouragement and hope you need to work your plan until you achieve “debt-free” status. Next up, freedom!</li>
          </ul>
          <br/>
          <Button href='/book'>Book Your Consultation</Button>
          <br/>
          <br/>
          <br/>
          <p className='quote'>
            The rich rule over the poor, and the borrower is the slave of the lender.
          </p>
          <br/>
          <p className='quote'>
            Proverbs 22:7
          </p>
          <br/>
          <br/>
          <p className='quote'>
            Jesus looked at them and said, “For human beings this is impossible, but for God all things are possible.”
          </p>
          <br/>
          <p className='quote'>
            Matthew 19:26
          </p>
          <br/>
          <br/>
          <p className='quote'>
            The LORD will open up for you his rich storehouse, the heavens, to give your land rain in due season and to bless all the works of your hands. You will lend to many nations but borrow from none.  
          </p>
          <br/>
          <p className='quote'>  
            Deuteronomy 22:12
          </p>
        </div>
      </div>
    );
  }

export default DebtElimination;