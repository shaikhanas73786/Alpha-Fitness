import "../styles/Trainers.css";
import TrainerCard from "./TrainerCard";

import trainer1 from "../assets/fit.jpg";
import trainer2 from "../assets/str.jpg";
import trainer3 from "../assets/yoga.jpg";

const Trainers = () => {
  return (
    <section className="trainers">

      <div className="trainers-heading">

        <h4>OUR TRAINERS</h4>

        <h2>Meet the Experts Behind Your Transformation</h2>

        <p>
          Our certified fitness coaches are committed to helping you
          achieve your goals through personalized training and expert
          guidance.
        </p>

      </div>

      <div className="trainer-container">

        <TrainerCard
          image={trainer2}
          name="Alex Carter"
          role="Strength Coach"
          experience="8+ Years Experience"
          speciality="Strength & Muscle Building"
          description="Helping members build strength, confidence, and discipline through personalized workout programs."
        />

        <TrainerCard
          image={trainer1}
          name="Sophia Miller"
          role="Yoga Instructor"
          experience="6+ Years Experience"
          speciality="Yoga & Flexibility"
          description="Specialized in improving flexibility, posture, and mental wellness through yoga sessions."
        />

        <TrainerCard
          image={trainer3}
          name="Daniel James"
          role="Fitness Trainer"
          experience="10+ Years Experience"
          speciality="Weight Loss & Cardio"
          description="Focused on fat loss, endurance, and overall fitness with customized training plans."
        />

      </div>

    </section>
  );
};

export default Trainers;