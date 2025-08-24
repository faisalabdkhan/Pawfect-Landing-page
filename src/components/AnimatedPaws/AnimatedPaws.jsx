import React from "react"
import "./AnimatedPaws.css"

const pawIndexes = Array.from({ length: 12 }, (_, i) => i + 1)

const AnimatedPaws = () => {
  return (
    <div className="animated-paws" aria-hidden="true">
      {pawIndexes.map((idx) => (
        <span key={idx} className={`paw paw-${idx}`} />
      ))}
    </div>
  )
}

export default AnimatedPaws


