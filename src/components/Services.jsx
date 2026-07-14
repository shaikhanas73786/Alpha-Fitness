import '../styles/Services.css'
import ServiceCard from './ServiceCard.jsx'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/cardio.jpg'
import img3 from '../assets/nutration.jpg'
import img4 from '../assets/trainer.jpg'
const Services = () => {
    return (
        <>
            <section className="services">

                <div className="services-heading">
                    <h4>OUR SERVICES</h4>
                    <h2>Train Smarter, Live Stronger</h2>
                    <p>
                        We provide world-class fitness programs designed to help you
                        achieve your goals with expert trainers and modern equipment.
                    </p>
                </div>

                <div className="services-container">

                    <ServiceCard
                        image={img1}
                        title="Strength Training"
                        description="Build muscle and increase strength with professional guidance."
                    />

                    <ServiceCard
                        image={img2}
                        title="Cardio Fitness"
                        description="Boost endurance and burn calories with advanced cardio workouts."
                    />

                    <ServiceCard
                        image={img3}
                        title="Nutrition Plans"
                        description="Personalized diet plans to support your fitness journey."
                    />

                    <ServiceCard
                        image={img4}
                        title="Personal Training"
                        description="One-to-one coaching for faster and better fitness results."
                    />

                </div>

            </section>
        </>
    )
}

export default Services
