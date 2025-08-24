import "./VisionSection.css"

const VisionSection = () => {
  return (
    <section className="vision-section reveal">
      <div className="container">
        <div className="vision-grid">
          {/* Image - Left Side */}
          <div className="vision-image-container">
            <div className="vision-image">
              <img src="/images/pet-owner-1.png" alt="Happy pet owner with dog" />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="vision-content">
            <h2 className="vision-title">PawFect Caring Vision</h2>

            <div className="vision-text">
              
              <p className="vision-paragraph">
                PawFect Caring is a one-stop solution designed to simplify pet parenting. Our app brings together
                essential pet care services in one easy-to-use platform, ensuring your furry companions receive the love
                and attention they deserve.
              </p>

              <p className="vision-paragraph">
                Whether it's booking grooming sessions, tracking health, managing vet records, buying pet food, or
                securing pet insurance, everything you can track in this pet reminder app.
              </p>

              <p className="vision-paragraph">
                PawFect Caring helps you stay on top of your pet's needs by getting timely reminders for vaccinations,
                grooming appointments, feeding times, and insurance renewals.
              </p>

              <p className="vision-paragraph vision-highlight">
                Never miss an important update again because your pet deserves the best care, always on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection 