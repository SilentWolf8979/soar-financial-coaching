import { React, useRef } from "react";
import { Helmet } from 'react-helmet';
import { Accordion } from 'react-bootstrap';

function WhatIs() {
  const myRef0 = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function executeScroll(cardRef) {
    await sleep(450);
    window.scrollTo({ behavior: 'smooth', top: document.querySelector('#' + cardRef.current.id).offsetTop + 15 });
  }

  return (
    <div className='App'>
      <Helmet>
        <title>Soar Financial Coaching - What is a financial coach?</title>
      </Helmet>
      <div className='pageContent'>
        <div className='margin'>
          <h2>What is a financial coach?</h2>
          <br/>
          <Accordion defaultActiveKey="0">
            <Accordion.Item ref={myRef0} id='item0' eventKey='0'>
              <Accordion.Header onClick={() => executeScroll(myRef0)} variant='link'>
                What is a financial coach?
              </Accordion.Header>
              <Accordion.Body>
                Financial coaches understand that money is not all about knowledge. Good money behaviors are also a critical element to building wealth. 
                When you work with a financial coach, you should expect to be addressing your money knowledge, attitudes, natural tendencies, and behaviors. 
                At Soar Financial Coaching, we walk with you as you reflect on the past, learn new skills, grow as a person and/or couple, and soar toward your goals!
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef1} id='item1' eventKey='1'>
              <Accordion.Header onClick={() => executeScroll(myRef1)} variant='link'>
                What is the consultation?
              </Accordion.Header>
              <Accordion.Body>
                Each client has unique needs. That’s why our initial consultation is so important. 
                It is a chance for us to get to know one another and for you to share a bit with me about your particular situation.  
                We also identify a few areas of focus for subsequent coaching sessions should you decide to continue toward coaching. 
                Initial consultations are complimentary and last 15-30 minutes.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef2} id='item2' eventKey='2'>
              <Accordion.Header onClick={() => executeScroll(myRef2)} variant='link'>
                Why do I need a financial coach?
              </Accordion.Header>
              <Accordion.Body>
                Clients seek out financial coaches for a variety of reasons. 
                Some just need an outside eye to look over their situation to make sure they haven’t missed an area where they can be better maximizing their earning and saving potential. 
                Others are sick and tired of debt dragging them down and claiming each paycheck before it even hits the bank. 
                Still others want to learn what it is they don’t yet know so they can be sure to get started on the right path right from the beginning.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef3} id='item3' eventKey='3'>
              <Accordion.Header onClick={() => executeScroll(myRef3)} variant='link'>
                What services do you sell?
              </Accordion.Header>
              <Accordion.Body>
                Coaching. That’s it. I don’t sell insurance or investments or products. 
                This allows me to be unbiased and without ulterior motives underscoring my recommendations. 
                I provide guidance, reflection, and information. I assist clients in creating a positive plan to move forward focused on their dreams. 
                If I make recommendations to my clients, it is because I believe my client will benefit, not my pocketbook.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef4} id='item4' eventKey='4'>
              <Accordion.Header onClick={() => executeScroll(myRef4)} variant='link'>
                How much does it cost to hire a financial coach?
              </Accordion.Header>
              <Accordion.Body>
                That’s like asking the mechanic how much it’s going to cost to fix your car even before you’ve taken it in for a diagnostic! 
                I can say that many people only need a single one-hour session per month for a period of 3-6 months. 
                Once we have our initial consultation and I have a better idea of your particular situation, we can discuss payment options at that time. 
                I offer both monthly and package options. For clients who are in a period of real struggle, 
                I can often assist them in finding money they didn’t even realize was slipping through their fingers by examining their monthly expenditures and budget (if they have one). 
                Ultimately, only you can decide if having the peace that comes with financial stability is worth the investment of a bit of time and money now so that you grow toward your dreams.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef5} id='item5' eventKey='5'>
              <Accordion.Header onClick={() => executeScroll(myRef5)} variant='link'>
                Change is scary. Are you going to make me do really hard things? What will I have to do?
              </Accordion.Header>
              <Accordion.Body>
                I am not going to MAKE you do anything. When I see changes that could potentially change a negative trajectory, 
                it’s my job to point them out to you. We can discuss many options for you and then YOU get to decide what will work best in your situation with your set of values. 
                If change is necessary but causes you anxiety, I can guide you toward small changes that are well within your comfort zone. 
                Practicing small changes help you grow your confidence so if you decide to make bigger changes down the road, you’ll be ready.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item ref={myRef6} id='item6' eventKey='6'>
              <Accordion.Header onClick={() => executeScroll(myRef6)} variant='link'>
                What does a coaching session look like?
              </Accordion.Header>
              <Accordion.Body>
                Honestly, a lot of times it looks like a couple of friends meeting up for coffee. 
                Sometimes we recline, taking it all in, and other times we lean in and really get into the nitty gritty. 
                Sessions can be virtual or, if distance permits, in person.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default WhatIs;
