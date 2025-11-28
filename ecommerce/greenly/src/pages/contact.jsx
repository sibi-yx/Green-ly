import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact <span>Greenly</span> 🌿</h1>
        <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello — we’re here for you.</p>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><FaMapMarkerAlt className="icon" /> 123 Green Street, Eco City, Earth</p>
          <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
          <p><FaEnvelope className="icon" /> support@greenly.com</p>
          <p className="info-desc">
            Our team is available Monday to Friday, 9:00 AM - 6:00 PM.  
            Drop us a message and we’ll get back to you as soon as possible.
          </p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message 🌿</button>
        </form>
      </div>

      <section className="map-section">
        <iframe
          title="greenly-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.202313722236!2d78.48667147503968!3d13.091031987244474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528d332b6d45b7%3A0x589ba1c958ee8e25!2sGreenly%20Organic%20Farms!5e0!3m2!1sen!2sin!4v1694511119925!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
