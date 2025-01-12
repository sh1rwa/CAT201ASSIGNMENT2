import React from "react";
import "./homepage.css";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Background Videoo */}
      <div className="video-container">
        <video className="background-vid" autoPlay muted loop playsInline>
          <source src="/penangmontage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header with Links */}
      <header className="homepage-header">
        <h1>Welcome to Penang!</h1> 
        <p>Your travel guide to this beautiful Malaysian state.</p>
        <nav>
          <ul>
            <li>
              <Link to="/plan-your-trip">Plan Your Trip</Link>
            </li>
            <li>
              <Link to="/be-inspired">Be Inspired</Link>
            </li>
            
          </ul>
        </nav>
      </header>

      {/* Footer */}

      <footer className="homepage-footer">
        <p>&copy; 2025 We ❤ Penang. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
          </div>
          </footer>
      
    </div>
  );
};

export default Homepage;
