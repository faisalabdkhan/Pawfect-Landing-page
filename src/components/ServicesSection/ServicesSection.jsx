import "./ServicesSection.css"
import { useState, useEffect } from "react"

const services = [
  {
    title: "Health",
    icon: "/images/hd3.png",
    logo: "/images/healthIcon.png",
    background: "#61a5fa", // Blue background to match health theme
  },
  {
    title: "Grooming",
    icon: "/images/gc3.png",
    logo: "/images/groomIcon.png",
    background: "#facc16", // Green background to match grooming theme
  },
  {
    title: "Food",
    icon: "/images/fd1.png",
    logo: "/images/foodIcon.png",
    background: "#34d399", // Amber background to match food theme
  },
  {
    title: "Insurance",
    icon: "/images/ic2.png",
    logo: "/images/insuranceIcon.png",
    background: "#fa7317", // Purple background to match insurance theme
  },
]

const ServicesSection = () => {
  const [flippedCards, setFlippedCards] = useState(new Set())
  const [isMobile, setIsMobile] = useState(false)

  // Detect if device supports hover
  useEffect(() => {
    const checkHoverSupport = () => {
      setIsMobile(!window.matchMedia('(hover: hover)').matches)
    }
    
    checkHoverSupport()
    window.addEventListener('resize', checkHoverSupport)
    
    return () => window.removeEventListener('resize', checkHoverSupport)
  }, [])

  const handleCardClick = (index) => {
    // Only handle clicks on mobile devices or when explicitly clicked
    if (isMobile) {
      setFlippedCards(prev => {
        const newSet = new Set(prev)
        if (newSet.has(index)) {
          newSet.delete(index)
        } else {
          newSet.add(index)
        }
        return newSet
      })
    }
  }

  return (
    <section id="services-section" className="services-section reveal">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Smart Reminders for Happy Pets</h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${flippedCards.has(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
              style={{ cursor: isMobile ? 'pointer' : 'default' }}
            >
              <div className="service-card-inner">
                {/* Front Side - Icon and Title */}
                <div 
                  className="service-card-front"
                  style={{ backgroundColor: service.background }}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-image">
                    <img src={service.icon || "/placeholder.svg"} alt={`${service.title} image`} />
                  </div>
                </div>

                {/* Back Side - Features List */}
                <div 
                  className="service-card-back"
                  style={{ backgroundColor: service.background }}
                >
                  <div className="service-logo">
                    <img src={service.logo} alt={`${service.title} logo`} />
                  </div>
                  <p className="service-description">
                    {service.title === "Health" && "Track vet visits, vaccinations and medications all in one app."}
                    {service.title === "Grooming" && "Never miss a spa day for your pet — get timely reminders for grooming sessions."}
                    {service.title === "Food" && "Know when it's mealtime or when food stock is running low."}
                    {service.title === "Insurance" && "Stay protected with reminders and support for your pet's insurance."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection