import '../styles/Hero.css'
import HeroImage from '../assets/hero1.jpg'
const Hero = () => {
  return (
    <>
        <section className="hero">

            <div className="hero-content">

                <h4>WELCOME TO IRON PULSE</h4>

                <h1>
                    BUILD YOUR <br />
                    <span>DREAM BODY</span>
                </h1>

                <p>
                    Transform your body with expert trainers, modern equipment,
                    personalized workout plans, and a motivating fitness
                    environment designed to help you achieve your goals.
                </p>

                <div className="hero-buttons">
                    <button className="join-btn">Join Now</button>
                    <button className="btn2">Explore Plans</button>
                </div>

            </div>

            <div className="hero-image">
                <img src={HeroImage} alt="Gym Hero" />
            </div>

        </section>
    </>
  )
}

export default Hero
