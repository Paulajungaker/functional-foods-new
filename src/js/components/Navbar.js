import React from "react";
import {useState} from "react";
import "./styling/Navbar.css";

const Navbar = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Handle logic to save email
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">Functional Foods</h1>
      </div>
      <div className="newsletter-container">
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            className="newsletter-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="newsletter-button" type="submit">
            Prenumerera
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
