import '../styles/Contact.css'
const Contact = () => {
  return (
    <>
       <section className="contact-section">
      <p className="contact-tagline">GET IN TOUCH</p>
      <h2 className="contact-heading">Let's Start Your Fitness Journey</h2>
      <p className="contact-subtext">
        Have questions or ready to join? Reach out to us and our team will get back to you shortly.
      </p>

      <div className="contact-wrapper">
        {/* Left: Form */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="Your Phone Number" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        {/* Right: Info */}
        <div className="contact-info">
          <div className="info-card">
            <h4>Address</h4>
            <p>123 Fitness Street, Pune, Maharashtra</p>
          </div>

          <div className="info-card">
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h4>Email</h4>
            <p>contact@alphafitness.com</p>
          </div>

          <div className="info-card">
            <h4>Working Hours</h4>
            <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
