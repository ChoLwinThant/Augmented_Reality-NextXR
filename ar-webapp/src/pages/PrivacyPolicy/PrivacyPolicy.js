import React, { Component } from 'react'
import './PrivacyPolicy.css';

export class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <p>
                This Privacy Policy describes how [Your Company Name] ("we", "us", or "our") collects, uses, and shares information collected from users ("user" or "you") of our mobile application [App Name] ("the App").
            </p>
            <h3>Information We Collect</h3>
            <p>
                We may collect the following types of information:
                <ul>
                    <li><strong>Personal Information</strong>: When you use our App, we may collect certain personal information such as your name, email address, and payment information when you make a purchase.</li>
                    <li><strong>Usage Information</strong>: We may collect information about how you interact with the App, including which features you use and how often.</li>
                    <li><strong>Device Information</strong>: We may collect information about the device you are using to access the App, including device type, operating system, and unique device identifiers.</li>
                    <li><strong>Location Information</strong>: With your consent, we may collect information about your location if you enable location-based services in the App.</li>
                </ul>
            </p>
            {/* Include additional sections of the Privacy Policy */}
            {/* You can style the privacy policy content with CSS */}
        </div>
    )
  }
}

export default PrivacyPolicy