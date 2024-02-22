import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Subscription.css'

export class Subscription extends Component {
  render() {
    return (
      <div className="subscription-container">
        <h2>Choose Your Plan</h2>
        <div className='card-container'>
          <div className="subscription-card card-1">

            <h3><b>Basic</b></h3>
            <h4>$4.99/ month</h4>
            <ul>
              <li>Image Gallery</li>
              <li>Video Content</li>
              <li><b>50</b> target images</li>
              <li><b>200</b> views per experience</li>
              <li>Upload custom contents to Editor</li>
            </ul>
            <Link to="/basic-plan">
              <button className='sub-btn'>Choose Basic Plan</button>
            </Link>
          </div>

          <div className="subscription-card card-2">
            <h3><b>Standard</b></h3>
            <h4>$9.99/ month</h4>
            <ul>
              <li>Image Gallery</li>
              <li>Video Content</li>
              <li><b>150</b> target images</li>
              <li><b>600</b> views per experience</li>
              <li>Upload custom contents to Editor</li>
            </ul>
            <Link to="/basic-plan">
              <button className='sub-btn'>Choose Standard Plan</button>
            </Link>
          </div>

          <div className="subscription-card card-3">
            <h3><b>Premium</b></h3>
            <h4>$14.99/ month</h4>
            <ul>
              <li>Image Gallery</li>
              <li>Video Content</li>
              <li><b>Unlimited</b> target images</li>
              <li><b>Unlimited</b> views per experience</li>
              <li>Upload custom contents to Editor</li>
            </ul>
            <Link to="/basic-plan">
              <button className='sub-btn'>Choose Premium Plan</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription