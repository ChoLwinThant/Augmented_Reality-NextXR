// Home.js
import React, { Component } from 'react';
import './Home.css';
import BgiImage from '../../images/bgi.png'; // Adjust the import path based on your project structure

class Home extends Component {
  render() {
    return (
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
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              </p>

              <div className="login-signup-buttons">

                <button className="login-button">Login</button>
                <button className="signup-button">Register</button>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
