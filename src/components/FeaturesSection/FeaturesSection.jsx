import "./FeaturesSection.css"

const features = [
  {
    title: "Don't Worry, We'll Remind You About Every Vaccination!",
    description:
      "Never miss your pet’s vaccine due dates. Get timely alerts for all upcoming and booster shots, straight to your mobile.",
    image: "/images/vaccination-service.png",
    imageAlt: "Pet vaccination reminder",
    layout: "image-left", // Image on left, content on right
  },
  {
    title: "Time for a Fresh Look? We'll Remind You!",
    description:
      "From baths to haircuts, receive grooming session alerts on your phone.",
    image: "/images/grooming-service.png",
    imageAlt: "Pet grooming service",
    layout: "content-left", // Content on left, image on right
  },
  {
    title: "From Now, No Missed Meals. We'll Keep Track!",
    description:
      "Set feeding schedules and get alerts when food stock runs low. Stay updated about your pet's nutrition.",
    image: "/images/food-service.png",
    imageAlt: "Pet feeding tracking",
    layout: "image-left", // Image on left, content on right
  },
  {
    title: "We’ll Also Remind You Before Your Insurance Policy Expires!",
    description:
      "Get alerts for renewal dates, premium payments and claims. Stay stress free with updates sent directly to your phone.",
    image: "/images/vet-service.png",
    imageAlt: "Pet insurance reminders",
    layout: "content-left", // Content on left, image on right
  },
]

const FeaturesSection = () => {
  return (
    <section id="about" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">We Love To Take Care Of Your Pets</h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${feature.layout === "content-left" ? "feature-item-reverse" : ""}`}
            >
              {/* Content */}
              <div className={`feature-content ${feature.layout === "content-left" ? "feature-content-reverse" : ""}`}>
                <div className="feature-header">
                  <img src="/images/blue-tick.png" alt="Check" className="feature-icon" />
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.description}</p>
              </div>

              {/* Image */}
              <div
                className={`feature-image-container ${feature.layout === "content-left" ? "feature-image-container-reverse" : ""}`}
              >
                <div className="feature-image">
                  <img src={feature.image || "/placeholder.svg"} alt={feature.imageAlt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 