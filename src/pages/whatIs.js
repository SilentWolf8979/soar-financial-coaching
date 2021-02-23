import { React, useRef } from "react";
import { Accordion, Card } from 'react-bootstrap';

function WhatIs() {
  const myRef0 = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function executeScroll(cardRef) {
    await sleep(450);
    window.scrollTo({ behavior: 'smooth', top: document.querySelector('#' + cardRef.current.id).offsetTop + 15 });
  }
  
  return (
    <div className="App">
      <div className='pageContent'>
        <h2>What is a financial coach?</h2>
        <br />
        <Accordion defaultActiveKey="0">
          <Card ref={myRef0} id='card0'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef0)} variant="link" eventKey="0">
              What is a financial coach?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                The best analogy I can come up with is that a financial coach is like a physical therapist. 
                You come in and tell me what is not working and I teach you exercises that you can practice on your own before we meet again so that your financial situation becomes stronger and more stable over time as you move toward your goals.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card ref={myRef1} id='card1'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef1)} variant="link" eventKey="1">
              Why do I need a financial coach?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Clients seek out financial coaches for a variety of reasons. 
                Some just need an outside eye to look over their situation to make sure they haven’t missed an area where they can be better maximizing their earning and saving potential. 
                Others are sick and tired of debt dragging them down and claiming each paycheck before it even hits the bank. 
                Still others want to learn what it is they don’t yet know so they can be sure to get started on the right path right from the beginning.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card ref={myRef2} id='card2'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef2)} variant="link" eventKey="2">
              What services do you sell?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Coaching. That’s it. I don’t sell insurance or investments or products. 
                This allows me to be unbiased and without ulterior motives underscoring my recommendations. 
                I provide guidance, reflection, and information, and I assist clients in creating a positive plan to move forward focused on their dreams. 
                If I make recommendations to my clients, it is because I believe my client will benefit, not my pocketbook.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card ref={myRef3} id='card3'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef3)} variant="link" eventKey="3">
              Can I afford a financial coach?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Often, I can assist clients in finding money they didn’t even realize was slipping through their fingers by examining their monthly expenditures and budget (if they have one). 
                Ultimately, only you can decide if having the peace that comes with financial stability is worth the investment of a bit of time and money now so that you grow <i>toward</i> your dreams instead of further away. 
                Usually, we find time and money for the things that matter most to us. Is financial well-being a priority for you?
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card ref={myRef4} id='card4'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef4)} variant="link" eventKey="4">
              Change is scary. Are you going to make me do really hard things? What will I have to do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                I am not going to MAKE you do anything. 
                When I see opportunities that could potentially change a negative trajectory, it’s my job to point them out to you. 
                We can discuss many options for you and then YOU get to decide what will work best in your situation with YOUR set of values. 
                If change is necessary but causes you anxiety, I can guide you toward small changes that are well within your comfort zone. 
                Practicing small changes grows your confidence so if you decide to make bigger changes down the road, you’ll be ready.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card ref={myRef5} id='card5'>
            <Accordion.Toggle as={Card.Header} onClick={() => executeScroll(myRef5)} variant="link" eventKey="5">
              What does a coaching session look like?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Honestly, a lot of times it looks like a couple of friends meeting up for coffee! 
                Sometimes we lean back taking it all in and other times we lean in and really get into the nitty gritty. 
                Wear what makes you comfortable. I do sessions virtually and in-person if distance permits it.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default WhatIs;
