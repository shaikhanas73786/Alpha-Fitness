import '../styles/OurServices.css'


const services = [
  {
    icon: "🏋️",
    title: "Strength Training",
    desc: "Build muscle and increase strength with professional guidance and modern equipment.",
  },
  {
    icon: "🏃",
    title: "Cardio Fitness",
    desc: "Boost endurance and burn calories with advanced cardio workouts and training zones.",
  },
  {
    icon: "🥗",
    title: "Nutrition Plans",
    desc: "Personalized diet plans to support your fitness journey and daily energy needs.",
  },
  {
    icon: "🧑‍🏫",
    title: "Personal Training",
    desc: "One-to-one coaching for faster results and complete form correction.",
  },
  {
    icon: "🧘",
    title: "Yoga & Recovery",
    desc: "Improve flexibility, reduce stress, and recover faster with guided sessions.",
  },
  {
    icon: "⏰",
    title: "24/7 Access",
    desc: "Train anytime you want with round-the-clock gym access for all members.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <p className="services-tagline">WHAT WE OFFER</p>
      <h2 className="services-heading">Our Services</h2>
      <p className="services-subtext">
        Everything you need to transform your body and build lasting discipline — all under one roof.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;