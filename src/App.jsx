import './App.css'
import Header from './header'
import Footer from './footer'

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <section className="hero-panel">
          <p className="eyebrow">Private Charity Initiative</p>
          {/* <h1>Learn how to donate safely through a trusted connection.</h1> */}
          <h1>The Initiative</h1>
          <p className="description">
            I'm putting together a quiet, private charity drive with my close circle. I'm partnering with a foundation that funds art and music programs for rural schools—providing painting supplies, instruments, theater equipment, and more. 
            These kids are growing up with nothing creative in their classrooms, and I'm trying to change that.  
          </p>
          {/* <a className="cta-button" href="mailto:morgan@example.com">
            Message Morgan
          </a> */}
        </section>
            <section className="price">
              <div className="boxa">
                <h2>$200,000</h2>
                <h4>Total Fundrasing Goal</h4>
              </div>
              <div className="boxb">
                <h4>I will personally match whatever comes in, 
                  dollar for dollar, up to $100,000.</h4>
              </div>
            </section>
            <p className="description">
            Our goal is to raise $200,000 in total, with my 
            commitment to match up to half—$100,000—to maximize the impact for these kids.
          </p>
          <section className="hero-panel">
            <h2>Your Invitation</h2>
          <p className="description">
           I'm hoping you'll consider contributing $25,000 toward this initiative. I'm not pushing—just putting it out there. Every dollar is going straight to buying easels, guitars, paint, microphones, theater equipment, and other creative tools that give these kids a real outlet for their creativity.
           </p>
          {/* <a className="cta-button" href="mailto:morgan@example.com">
            Message Morgan
          </a> */}
        </section>
        {/* <section className="info-grid">
          <article className="card">
            <h2 className="card-title">No payment on site</h2>
            <p className="card-text">
              We keep the experience simple and transparent: this page is only for information. Actual donations happen through
              a direct conversation with Morgan.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">Fast answers</h2>
            <p className="card-text">
              Get responsive support about donation options, beneficiary details, and how to give safely in your area.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">Clear next steps</h2>
            <p className="card-text">
              Learn exactly what to expect before you give, including verification, delivery, and follow-up support.
            </p>
          </article>
        </section>

        <section className="details">
          <h2>How it works</h2>
          <p>
            Start by sending a message to Morgan. You'll receive a personal response with guidance on where and how to donate,
            plus any verification details you need to feel confident.
          </p>
          <ul className="feature-list">
            <li>Ask questions before you commit</li>
            <li>Receive real-time support and updates</li>
            <li>Keep your donation secure and transparent</li>
          </ul>
        </section> */}

      <Footer />
      </main>
    </div>
  )
}

export default App;