import "./CommunitySection.css"

const CommunitySection = () => {
  return (
    <section className="community-section reveal">
      <div className="container">
        <div className="community-banner">
          <div className="community-grid">
            {/* Content */}
            <div className="community-content">
              <h2 className="community-title">Become a part of our community</h2>
              <p className="community-description">
                Join our community of pet parents and keep your furry friend happy and healthy.
Download the app now and enjoy with your pets stress free.
              </p>
              <p className="community-description">
                Let’s Take Care of Your Pet, Together!
              </p>

              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.techflux.pawfectcaring"
                target="_blank"
                rel="noopener noreferrer"
                className="google-play-button"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="google-play-badge"
                />
              </a>
            </div>

            {/* Image */}
            <div className="community-image-container">
              <div className="community-image">
                <img src="/images/pet-owner-2.png" alt="Woman holding a corgi dog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
