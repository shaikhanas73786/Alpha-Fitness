import '../styles/TrainersCard.css'
const TrainCard = (props) => {
  return (
    <>
      <div className="trainer-card">

        <img
          className="trainer-image"
          src={props.image}
          alt={props.name}
        />

        <div className="trainer-content">

          <h3 className="trainer-name">
            {props.name}
          </h3>

          <h4 className="trainer-role">
            {props.role}
          </h4>

          <p className="trainer-exp">
            {props.experience}
          </p>

          <p className="trainer-speciality">
            {props.speciality}
          </p>

          <p className="trainer-description">
            {props.description}
          </p>

          <button className="trainer-btn">
            Join Session
          </button>

        </div>

      </div>

    </>
  )
}

export default TrainCard
