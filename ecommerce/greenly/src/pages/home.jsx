import React from "react";
import "./home.css";
import heroImage from "../assets/green-hero.jpeg";
import Shop from "./shop";
import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Home() {
    return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to GREEN-ly 🌿</h1>
          <p>Fresh, Organic, and Sustainable Products Delivered to Your Doorstep.</p>
          <button className="btn-primary" ><NavLink to="/shop">Shop Now</NavLink></button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Greenly Products" />
        </div>
      </section>
      <Shop/>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose GREEN-ly?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Organic Products</h3>
            <p>100% natural and chemical-free items for your healthy lifestyle.</p>
          </div>
          <div className="card">
            <h3>Eco-Friendly</h3>
            <p>Our packaging and products are designed to protect the planet.</p>
          </div>
          <div className="card">
            <h3>Fast Delivery</h3>
            <p>Fresh products delivered straight to your doorstep quickly.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Join the Green Revolution Today!</h2>
        <button className="btn-secondary getstart"> <NavLink to="/about">Get Started</NavLink></button>
      </section>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <FaLeaf className="leaf-icon" />
            <h2>GREEN-ly</h2>
            <p>Freshness you can trust, sustainability you can feel.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@greenly.com</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GREEN-ly. All rights reserved. 🌿</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
