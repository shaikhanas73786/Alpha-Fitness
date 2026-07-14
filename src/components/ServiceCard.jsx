import '../styles/ServiceCard.css'
const ServiceCard = (props) => {
    return (
        <>
            <div className="service-card">

                <div className="service-image">
                    <img src={props.image} alt={props.title} />
                </div>

                <div className="service-content">

                    <h3 className="service-title">
                        {props.title}
                    </h3>

                    <p className="service-description">
                        {props.description}
                    </p>

                    <button className="service-btn">
                        Learn More
                    </button>

                </div>

            </div>
        </>
    )
}

export default ServiceCard
