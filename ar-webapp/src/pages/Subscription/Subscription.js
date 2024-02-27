import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Subscription.css'

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalBasic: false,
      showModalStandard: false,
      showModalPremium: false,
      agreeTerms: false,
    };
  }

  handleChoosePlan = (plan) => {
    this.setState({
      [`showModal${plan}`]: true,
    });
  };

  handleCloseModal = (plan) => {
    this.setState({
      [`showModal${plan}`]: false,
    });
  };

  handleCheckboxChange = (event) => {
    this.setState({ agreeTerms: event.target.checked });
  };

  handleContinueToPayment = () => {
    // Redirect to Payment.js if agreeTerms is true
    if (this.state.agreeTerms) {
      this.props.history.push('/payment');
    }
  };

  render() {
    const { showModalBasic, showModalStandard, showModalPremium, agreeTerms } = this.state;

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
            <button className="sub-btn" onClick={() => this.handleChoosePlan('Basic')}>
              Choose Basic Plan
            </button>
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
            <button className="sub-btn" onClick={() => this.handleChoosePlan('Standard')}>
              Choose Standard Plan
            </button>
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
            <button className="sub-btn" onClick={() => this.handleChoosePlan('Premium')}>
              Choose Premium Plan
            </button>
          </div>


          {/* Modals */}
          {showModalBasic && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <span className="close" onClick={() => this.handleCloseModal('Basic')}>
                    &times;
                  </span><br></br>
                  <h2>Please Confirm Your Subscription Plan</h2>
                </div>
                <div className="modal-details">
                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Plan Name</p>
                      <p>Plan Type</p>

                    </div>
                    <div className='details-right-col'>
                      <p>Basic Plan</p>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <hr></hr>

                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Payment</p>
                    </div>
                    <div className='details-right-col'>
                      <p>$4.99</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <label>
                    <input type="checkbox" checked={agreeTerms} onChange={this.handleCheckboxChange} />
                    <span> I agree to <a href="/terms" className='terms'>Terms and Conditions </a>and
                      <a href="/policy" className='policy'> Privacy and Policy</a>.</span>
                  </label>
                  <button className='to-payment' onClick={this.handleContinueToPayment} disabled={!agreeTerms}>Continue to Payment Page</button>
                </div>

              </div>
            </div>
          )}


          {showModalStandard && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <span className="close" onClick={() => this.handleCloseModal('Standard')}>
                    &times;
                  </span><br></br>
                  <h2>Please Confirm Your Subscription Plan</h2>
                </div>
                <div className="modal-details">
                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Plan Name</p>
                      <p>Plan Type</p>
                    </div>
                    <div className='details-right-col'>
                      <p>Standard Plan</p>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Payment</p>
                    </div>
                    <div className='details-right-col'>
                      <p>$9.99</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <label>
                    <input type="checkbox" checked={agreeTerms} onChange={this.handleCheckboxChange} />
                    <span> I agree to <a href="/terms" className='terms'>Terms and Conditions </a>and
                      <a href="/policy" className='policy'> Privacy and Policy</a>.</span>
                  </label>
                  <button className='to-payment' onClick={this.handleContinueToPayment} disabled={!agreeTerms}>Continue to Payment Page</button>
                </div>

              </div>
            </div>
          )}

          {showModalPremium && (
            <div className="modal-overlay">
              <div className="modal">
                <div className="modal-header">
                  <span className="close" onClick={() => this.handleCloseModal('Premium')}>
                    &times;
                  </span><br></br>
                  <h2>Please Confirm Your Subscription Plan</h2>
                </div>
                <div className="modal-details">
                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Plan Name</p>
                      <p>Plan Type</p>
                    </div>
                    <div className='details-right-col'>
                      <p>Premium Plan</p>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='details-row'>
                    <div className='details-left-col'>
                      <p>Payment</p>
                    </div>
                    <div className='details-right-col'>
                      <p>$14.99</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className='agree-check'>
                    <label>
                      <input type="checkbox" checked={agreeTerms} onChange={this.handleCheckboxChange} />
                      <span> I agree to <a href="/terms" className='terms'>Terms and Conditions </a>and
                        <a href="/policy" className='policy'> Privacy and Policy</a>.</span>
                    </label>
                  </div>
                  <button className='to-payment' onClick={this.handleContinueToPayment} disabled={!agreeTerms}>Continue to Payment Page</button>
                </div>

              </div>
            </div>
          )}



        </div>
      </div>
    );
  }
}

export default Subscription