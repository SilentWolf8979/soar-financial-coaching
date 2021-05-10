import { Helmet } from 'react-helmet';

function Book() {
  return (
    <div className="App">
      <Helmet>
        <title>Soar Financial Coaching - Book your consultation</title>
      </Helmet>
      <div className='pageContent'>
        <div className='margin'>
          <h2>Book your consultation</h2>
          <br/>
          {/* Calendly inline widget begin */}
          <div 
            className="calendly-inline-widget bookEmbed" 
            data-url="https://calendly.com/soarfinancialcoaching/complimentary-consultation-30-min?background_color=cedbb0&text_color=092a48&primary_color=df5a01"
          >
          </div>
          {/* Calendly inline widget end */}
        </div>
      </div>
    </div>
  );
}

export default Book;