import '../styles/About.css'
import aboutgym from '../assets/aboutgym.jpg'
const About = () => {
  return (
    <>
       <section className="about-section">
      <p className="about-tagline">ABOUT US</p>
      <h2 className="about-heading">Building Strength, Building Discipline</h2>
      <p className="about-subtext">
        AlphaFitness is more than a gym — it's a community dedicated to helping you become the strongest version of yourself.
      </p>

      {/* Story Row */}
      <div className="about-wrapper">
        <div className="about-image">
          <img src={aboutgym} alt="Gym Interior" />
        </div>

        <div className="about-content">
          <h3>Our Story</h3>
          <p>
            Founded with a simple mission — to make fitness accessible, effective, and sustainable.
            AlphaFitness brings together certified trainers, modern equipment, and a motivating
            environment so every member can push past their limits and achieve real results.
          </p>
          <p>
            Whether you're just starting out or training for a competition, our team is here to
            guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card">
          <h3>500+</h3>
          <p>Active Members</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Certified Trainers</p>
        </div>
        <div className="stat-card">
          <h3>8+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Gym Access</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-us">
        <h3 className="why-heading">Why Choose Us</h3>
        <div className="why-grid">
          <div className="why-card">
            <h4>Expert Trainers</h4>
            <p>Certified professionals dedicated to your progress and safety.</p>
          </div>
          <div className="why-card">
            <h4>Modern Equipment</h4>
            <p>State-of-the-art machines and free weights for every workout style.</p>
          </div>
          <div className="why-card">
            <h4>Personalized Plans</h4>
            <p>Custom workout and nutrition plans built around your goals.</p>
          </div>
          <div className="why-card">
            <h4>Supportive Community</h4>
            <p>A motivating environment that keeps you accountable and inspired.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
