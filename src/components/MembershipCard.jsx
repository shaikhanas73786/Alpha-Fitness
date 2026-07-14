import '../styles/MembershipCards.css'

const MembershipCard = (props) => {
    return (
        <>
            <div className="membership-card">

                <h3 className="plan-name">
                    {props.plan}
                </h3>

                <h1 className="plan-price">
                    {props.price}
                    <span>{props.duration}</span>
                </h1>

                <ul className="plan-features">

                    <li>✔ {props.feature1}</li>

                    <li>✔ {props.feature2}</li>

                    <li>✔ {props.feature3}</li>

                </ul>

                <button className="plan-btn">
                    Join Now
                </button>

            </div>
        </>
    )
}

export default MembershipCard
