import React from "react";
import "./about.css";
import aboutImage from "../assets/about1.jpeg"; // Add your image here
import founder1 from "../assets/founder1.png";
import head2 from "../assets/head2.png";
import operation1 from "../assets/operation1.jpeg";
import { FaLeaf, FaTruck, FaSeedling, FaRecycle } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>About <span>GREEN-ly</span> 🌿</h1>
          <p>
            At <strong>GREEN-ly</strong>, we are dedicated to redefining the way people connect with food and nature. Our journey began with a simple vision: to make fresh, organic, and sustainably grown produce accessible to every home. We work closely with local farmers who follow eco-friendly practices, ensuring that every vegetable, fruit, and product you receive is free from harmful chemicals and grown with care. Sustainability is at the heart of everything we do — from biodegradable packaging to minimizing our carbon footprint during delivery. But Greenly is more than just a marketplace; it’s a movement toward healthier living, conscious choices, and a greener planet. By choosing Greenly, you’re not only nourishing your body with pure, high-quality products, you’re supporting responsible farming, empowering local communities, and joining a growing family committed to preserving nature for future generations. Together, we believe that small choices can lead to big changes — and every product we deliver carries that promise of health, freshness, and environmental care. 🌿
          </p>
        </div>
        <div className="about-hero-image">
          <img src={aboutImage} alt="About Greenly" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is to make healthy, organic living accessible to everyone. 
          We partner with local farmers to ensure that every product you receive 
          is fresh, natural, and sustainably sourced.
        </p>
        <div className="mission-icons">
          <div className="mission-card">
            <FaLeaf className="mission-icon" />
            <h3>Pure & Organic</h3>
            <p>We deliver 100% natural and chemical-free produce.</p>
          </div>
          <div className="mission-card">
            <FaTruck className="mission-icon" />
            <h3>Fast Delivery</h3>
            <p>Freshness guaranteed with quick doorstep delivery.</p>
          </div>
          <div className="mission-card">
            <FaSeedling className="mission-icon" />
            <h3>Supporting Farmers</h3>
            <p>Empowering local farmers through fair trade partnerships.</p>
          </div>
          <div className="mission-card">
            <FaRecycle className="mission-icon" />
            <h3>Eco Packaging</h3>
            <p>All our packaging is 100% recyclable and eco-friendly.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={founder1} alt="Team Member"  height={"360px"}/>
            <h3>Praveen Kumar</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src={head2} alt="Team Member" height={"360px"} />
            <h3>Jaya Prasanthan</h3>
            <p>Marketing Head</p>
          </div>
          <div className="team-card">
            <img src={operation1} alt="Team Member" height={"360px"} />
            <h3>Rahul Dev</h3>
            <p>Operations Manager</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Be a Part of Our Green Journey 🌱</h2>
        <p>
          Join us in creating a cleaner, greener, and healthier planet — one 
          product at a time.
        </p>
        <button className="btn-join">Join the Movement</button>
      </section>
    </div>
  );
}

export default About;
