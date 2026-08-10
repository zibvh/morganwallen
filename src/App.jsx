import './App.css'
import Header from './header'
import Footer from './footer'

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h5A2.5 2.5 0 0 1 14 6.5v1.1a2.5 2.5 0 0 1-2 2.46V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2H4Z" />
    <path d="M16.5 8.5A2.5 2.5 0 0 0 14 11v1.5a2.5 2.5 0 0 0 2.5 2.5h1A2.5 2.5 0 0 1 20 17.5V19a1 1 0 0 1-1 1h-1.5" />
  </svg>
)

const GuitarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 4.5 18 3l1 5-3.5 3.5a3 3 0 0 1-3.7 3.7l-2.6 2.6a2 2 0 0 0-.6 1.4V20" />
    <path d="M8.5 15.5 5 19" />
    <circle cx="9" cy="15" r="1.5" />
  </svg>
)

const MicIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 6a3 3 0 1 1 6 0v5a3 3 0 1 1-6 0Z" />
    <path d="M7 11a5 5 0 0 0 10 0" />
    <path d="M12 16v3" />
    <path d="M9 19h6" />
  </svg>
)

const StageIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 18h16" />
    <path d="M7 18V8l5-3 5 3v10" />
    <path d="M10 18v-4h4v4" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V8a4 4 0 1 1 8 0v2" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const MapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 5 3 7v13l6-2 6 2 6-2V3l-6 2-6-2Z" />
    <path d="M9 5v13" />
    <path d="M15 3v13" />
  </svg>
)

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <section className="hero-panel intro-card">
          <p className="eyebrow">Private Charity Initiative</p>
          <h1>The Initiative</h1>
          <p className="description">
            I’m putting together a quiet, private drive for a foundation that helps rural schools access art, music, and theater programs. The idea is simple: give kids real creative tools and a place to grow.
          </p>
          <div className="action-row">
            <a className="primary-button" href="https://t.me/morganwallenmanagementt">
              Message Morgan
            </a>
            <a className="secondary-button" href="https://t.me/morganwallenmanagementt">
              Ask about the deadline
            </a>
          </div>
        </section>

        <section className="stats-card">
          <div className="stat-block">
            <span className="stat-number">$200,000</span>
            <span className="stat-label">Total fundraising goal</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">$100,000</span>
            <span className="stat-label">Matched dollar for dollar</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">$25,000</span>
            <span className="stat-label">Suggested contribution</span>
          </div>
          <div className="stat-block deadline">
            <span className="stat-number">Aug 15</span>
            <span className="stat-label">Commitment deadline</span>
          </div>
        </section>

        <section className="story-card">
          <p className="eyebrow">Your Invitation</p>
          <h2>I’m hoping you’ll consider contributing $25,000 toward this initiative.</h2>
          <p className="description">
            I’m not pushing, just putting it out there. Every dollar goes toward buying easels, guitars, paint, microphones, theater equipment, and other creative tools that give these kids a real outlet for their creativity.
          </p>
          <div className="suggestion-badge">Suggested contribution: $25,000 USD</div>
        </section>

        <section className="fund-grid">
          <article className="fund-card">
            <div className="icon-wrap"><PaletteIcon /></div>
            <h3>Art Supplies</h3>
            <p>Easels, paint, brushes, canvas, drawing materials, and more.</p>
          </article>

          <article className="fund-card">
            <div className="icon-wrap"><GuitarIcon /></div>
            <h3>Musical Instruments</h3>
            <p>Guitars, keyboards, drums, and other instruments for students who need a way in.</p>
          </article>

          <article className="fund-card">
            <div className="icon-wrap"><MicIcon /></div>
            <h3>Audio Equipment</h3>
            <p>Microphones, speakers, mixers, and recording gear to build confidence and expression.</p>
          </article>

          <article className="fund-card">
            <div className="icon-wrap"><StageIcon /></div>
            <h3>Theater Equipment</h3>
            <p>Props, costumes, lighting, stage sets, and the tools that make performance possible.</p>
          </article>
        </section>

        <section className="details-card">
          <div className="details-header">
            <div>
              <p className="eyebrow">Important Details</p>
              <h2>Quiet, direct, and practical.</h2>
            </div>
            <a className="secondary-button" href="https://t.me/morganwallenmanagementt">
              Reach out privately
            </a>
          </div>

          <div className="detail-grid">
            <article className="detail-card">
              <div className="icon-wrap"><LockIcon /></div>
              <h3>Private and confidential</h3>
              <p>No posts, no press, and no red carpets. Just a simple, private conversation.</p>
            </article>

            <article className="detail-card">
              <div className="icon-wrap"><ClockIcon /></div>
              <h3>Needed by the deadline</h3>
              <p>All commitments are needed by August 15 so the full amount can be wired and ordered in time.</p>
            </article>

      
          </div>
        </section>

       

        <Footer />
      </main>
    </div>
  )
}

export default App;