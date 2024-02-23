// Home.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import BgiImage from '../../images/bgi.png'; // Adjust the import path based on your project structure

class Home extends Component {
  render() {
    return (
      <div>
        {/* Home Section */}
        <div id="home">
          <div className="container">
            <div className="welcome-message">
              <h1 className="sub-title">Welcome to The AR Website!</h1>
            </div>
            <div className="row">
              <div className="home-col-1">
                <img src={BgiImage} alt="AR" className="bgi-image" />
              </div>
              <div className="home-col-2">
                <p>
                  Explore the world of Augmented Reality (AR) with me! I'm passionate about creating immersive experiences
                  using AR technology. Whether it's developing AR applications or experimenting with the latest AR tools,
                  I love pushing the boundaries of what's possible. Let's embark on a journey together into the exciting
                  realm of Augmented Reality.
                </p>
                <div className="login-signup-buttons">
                  <Link to="/login" className="login-button">Start Exploring</Link>
                  <Link to="/signup" className="signup-button">Get Involved</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about">
          <div className="about-container">
            <div className="row">
              <div className="about-col-1">
                <img src={BgiImage} alt="AR" className="bgi-image" />
              </div>
              <div className="about-col-2">
                <h1 className="sub-title">What we are</h1>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
                <div className="login-signup-buttons">
                  <Link to="/trial" className="trial-button">Start Your Trial</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="contact-left">
                <h1 className="sub-title">Contact Us</h1>
                <p><i class="fa-solid fa-envelope"></i>b.mintheim@gmail.com</p>
                 <p><i class="fa-sharp fa-solid fa-phone"></i>+95 9444451766</p>
                <div className="scoial-icons">
                  {/* ... Social icons ... */}
                </div>
              </div>
              <div className="contact-right">
                <form name="submit-to-google-sheet">
                  {/* ... Contact form ... */}
                </form>
                <span id="msg"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
