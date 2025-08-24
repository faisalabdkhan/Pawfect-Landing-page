import "./HeroSection.css";
import AnimatedPaws from "../AnimatedPaws/AnimatedPaws";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section reveal">
      <div className="hero-bg">
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-noise" />
      </div>

      <div className="container">
        <div className="hero-flex-container">
          <div className="hero-left-section">
            <div className="hero-content">
              <div className="hero-badge">
                <img src="/images/paw-black.png" alt="Verified" />
                Smart Pet Care Reminder
              </div>

              <h1 className="hero-title">
                Care on Time, <span className="hero-highlight">Every Time</span>
              </h1>

              <p className="hero-description">
                Keep your furry friend healthy and happy with intelligent reminders for
                vaccines, grooming, meals and insurance — all in one beautiful app.
              </p>

              <div className="hero-feature-chips">
                <span className="chip">
                  <img src="/images/healthIcon.png" alt="Vaccines" />
                  Vaccines
                </span>
                <span className="chip">
                  <img src="/images/groomIcon.png" alt="Grooming" />
                  Grooming
                </span>
                <span className="chip">
                  <img src="/images/foodIcon.png" alt="Meals" />
                  Meals
                </span>
                <span className="chip">
                  <img src="/images/insuranceIcon.png" alt="Insurance" />
                  Insurance
                </span>
              </div>

              <div className="hero-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.techflux.pawfectcaring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-store"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="google-play-badge"
                  />
                </a>
              </div>

              <div className="hero-trust">
                <img src="/images/paw-black.png" alt="Trust" />
                Loved by pet parents and vets worldwide
              </div>
            </div>
          </div>

          <div className="hero-right-section">
            <div className="hero-visual">
              <div className="hero-glow" />
              <img
                src="/images/hero-pets.png"
                alt="Happy pets - dog, cat, and kitten"
                className="hero-pets-image"
              />

              <div className="hero-orbits" aria-hidden="true">
                <div className="orbit orbit-sm">
                  <span className="orbit-item">
                    <svg viewBox="0 0 24 24" className="icon-bone" aria-hidden="true">
                      <path d="M6.5 7a2.5 2.5 0 1 1 2.45-3.02l.05.17h5l.05-.17A2.5 2.5 0 1 1 16.5 7l.17.05v9.9L16.5 17a2.5 2.5 0 1 1-2.45 3.02l-.05-.17h-5l-.05.17A2.5 2.5 0 1 1 6.5 17l-.17-.05V7.05L6.5 7z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className="orbit orbit-md">
                  <span className="orbit-item">
                    <svg viewBox="0 0 24 24" className="icon-fish" aria-hidden="true">
                      <path d="M3 12s4-5 9-5c5 0 9 5 9 5s-4 5-9 5c-5 0-9-5-9-5zm9-2.5a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" />
                      <path d="M6 12l-2 2m2-2l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
                <div className="orbit orbit-lg">
                  <span className="orbit-item">
                    <svg viewBox="0 0 24 24" className="icon-heart" aria-hidden="true">
                      <path d="M12 21s-7-4.35-9.33-8.06C.5 9.53 2.64 6 6.17 6c2 0 3.26 1.17 3.83 2.06C10.57 7.17 11.83 6 13.83 6c3.53 0 5.67 3.53 3.5 6.94C19 16.65 12 21 12 21z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className="orbit orbit-xl">
                  <span className="orbit-item">
                    <svg viewBox="0 0 24 24" className="icon-syringe" aria-hidden="true">
                      <path d="M20.5 3.5l-1-1-3 3-1.5-1.5-1 1 1.5 1.5-9 9V18h2.5l9-9 1.5 1.5 1-1-1.5-1.5 3-3z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedPaws />
    </section>
  );
};

export default HeroSection;
