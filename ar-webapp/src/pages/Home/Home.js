// Home.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import BgiImage from '../../images/bgi.png';
import BackImage from '../../images/back.png';
import EarthGitImage from '../../images/earth.gif';
import Person1Image from '../../images/person1.png';
import Person2Image from '../../images/person2.png';
import Person3Image from '../../images/person3.png';
import Person4Image from '../../images/person4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Welcome Section */}
        <div id="home" className="section">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="buttons">
                  <Link to="/login" className="login-button">Start Exploring</Link>
                  <Link to="/signup" className="signup-button">Get Involved</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="section" style={{ backgroundImage: `url(${BackImage})` }}>
          <div className="container">
            <div className="about-container">
              <div className="row">
                <div className="about-col-1">
                  {/* No need for the image tag here if you're using it as a background */}
                </div>
                <div className="about-col-2">
                  <h1 className="about-sub-title">What we are</h1>
                  <h2 className="about-title">Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                  </p>
                  
                  <div className="buttons">
                    <Link to="/trial" className="trial-button">Start Your Trial</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* Team Section */}
<div id="team" className="section">
  <div className="container team-container">
    <div className="row">
      <div className="team-col-1">
        
        <h1 className="team-sub-title">Meet Our Team</h1>
        <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="team-col-2">
      {/* Team Member */}
<div className="team-member">
  <img src={Person1Image} alt="person1" />
  <h2>John Doe</h2>
  <p>Co-founder & CEO</p>
  {/* Social Links */}
  <div className="social-links">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
</div>

<div className="team-member">
  <img src={Person2Image} alt="person2" />
  <h2>Jane Smith</h2>
  <p>Co-founder & CTO</p>
  <div className="social-links">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
</div>

<div className="team-member">
  <img src={Person3Image} alt="person3" />
  <h2>Jane Smith</h2>
  <p>Co-founder & CTO</p>
  <div className="social-links">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
</div>

<div className="team-member">
  <img src={Person4Image} alt="person4" />
  <h2>Jane Smith</h2>
  <p>Co-founder & CTO</p>
  <div className="social-links">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>


{/* Contact Section */}
<div id="contact" className="section" style={{ backgroundImage: `url(${EarthGitImage})` }}>
          <div className="container contact-container">
            <div className="row">
              <div className="contact-col-1">
                {/* Contact Form */}
                <h1 className="contact-sub-title">Contact Us</h1>
                <form className="contact-form">
                  {/* Your form fields go here */}
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message"></textarea>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;