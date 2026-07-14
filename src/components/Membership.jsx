import '../styles/Membership.css'
import MembershipCard from './MembershipCard.jsx'
const Membership = () => {
  return (
    <>
      <section className="membership">

        <div className="membership-heading">

          <h4>MEMBERSHIP PLANS</h4>

          <h2>Choose the Perfect Plan for You</h2>

          <p>
            Flexible membership plans designed for beginners,
            fitness enthusiasts, and professional athletes.
          </p>

        </div>

        <div className="membership-container">

          <MembershipCard
            plan="Basic"
            price="₹999"
            duration="/Month"
            feature1="Gym Access"
            feature2="Cardio Area"
            feature3="Locker Facility"
          />

          <MembershipCard
            plan="Standard"
            price="₹1999"
            duration="/Month"
            feature1="Gym Access"
            feature2="Personal Trainer"
            feature3="Nutrition Guide"
          />

          <MembershipCard
            plan="Premium"
            price="₹2999"
            duration="/Month"
            feature1="Full Gym Access"
            feature2="Diet Plan"
            feature3="Steam & Sauna"
          />

        </div>

      </section>
    </>
  )
}

export default Membership
