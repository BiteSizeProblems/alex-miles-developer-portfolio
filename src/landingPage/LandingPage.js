import SpeechBubble from '../components/widgets/SpeechBubble';

import './LandingPage.css';

const Landing = () => {

  return (
    <div className="page_container landing-page">
      <header>
        <section style={{textAlign: 'right', borderRight: '0.05em solid white'}}>
          <h2>10:04PM</h2>
          <h2>South Carolina</h2>
        </section>
        <section>
          <SpeechBubble text="Thanks for visiting!" />
        </section>
      </header>
    </div>
  )
};

export default Landing;