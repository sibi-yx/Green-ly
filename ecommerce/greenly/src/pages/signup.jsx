import React, { useState } from "react";
import "./signup.css";
import { FaLeaf } from "react-icons/fa";
import axios from "axios";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/default.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMessage("");
  };

  // Handle form submit (no validation)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await axios.post("http://localhost:3000/signup", payload);
      console.log("Signup success:", res.data);

      const msg = res?.data?.message || "Signup successful!";
      setSuccessMessage(msg);

      // Clear form fields
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      alertify.success('user registered succesfully');
      alertify.set('notifier','position', 'top-center');

    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please check your server connection.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <FaLeaf className="leaf-icon" />
          <h2>
            Join <span>Greenly</span> 🌿
          </h2>
          <p>Create your account and start your green journey today!</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <p className="login-text">
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
