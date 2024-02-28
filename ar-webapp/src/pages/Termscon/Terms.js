import React, { Component } from 'react'
import './Terms.css';

export class Terms extends Component {
  render() {
    return (
      <div className="terms-and-conditions-container">
        <div className='terms-content'>
          <h1>Terms and Conditions</h1>
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the [App Name] mobile application (the "Service") operated by [Your Company Name] ("us", "we", or "our").
          </p>
          <h3>Accounts</h3>
          <p>
            When you create an account with us, you must provide us with accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>
          <h3>Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Country] and foreign countries.
          </p>
        </div>
      </div>
    )
  }
}

export default Terms