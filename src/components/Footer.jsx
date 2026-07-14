import React from 'react'
import '../styles/Footer.css'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
  <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h2 className="footer-logo">
            Alpha <span>Fitness</span>
          </h2>

          <p className="footer-text">
            Transform your body and mind with expert trainers,
            premium equipment and a motivating fitness community.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Services</a></li>

            <li><a href="#">Trainers</a></li>

            <li><a href="#">Membership</a></li>

          </ul>

        </div>

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaLocationDot /> Nanded, Maharashtra
          </p>

          <p>
            <FaPhone /> +91 98765 43210
          </p>

          <p>
            <FaEnvelope /> info@AlphaFitness.com
          </p>

        </div>

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaXTwitter /></a>

            <a href="#"><FaYoutube /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Alpha Fitness Gym | All Rights Reserved.
        </p>

      </div>

    </footer>
    </>
  )
}

export default Footer
