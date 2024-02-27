import React, { useState } from 'react';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Payment.css';

// Define your Stripe publishable key
const stripePromise = loadStripe('pk_live_51Oo7CME0TA6nFEJOJhtucDCviiMEzdj1IJiVPxxbbDnYZu0pDTGBPskXtyBTrd8uKQ1ezGbAfhquD5mFx35NLlbc00CSN3Jeti');

// PaymentForm component
const Payment = () => {
    return (
        <div className="container"> {/* Center the Payment form */}
            <div className="form-container"> {/* Add container for styling */}
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

// CheckoutForm component
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [selectedAmount, setSelectedAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Create payment method using card information
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: name,
                email: email,
            },
        });

        if (error) {
            console.error('Stripe error:', error);
        } else {
            // Payment was successful, handle it here
            console.log('Payment method:', paymentMethod);
            console.log('Selected amount:', selectedAmount);
            console.log('Name:', name);
            console.log('Email:', email);
            setPaymentSuccess(true);
        }
    };

    const handleAmountChange = (event) => {
        setSelectedAmount(event.target.value);
    };

    const handleCloseModal = () => {
        setPaymentSuccess(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="payment-input"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className="payment-input"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={selectedAmount} onChange={handleAmountChange} required>
                    <option value="">Select amount</option>
                    <option value="10">$4.99</option>
                    <option value="20">$9.99</option>
                    <option value="30">$14.99</option>
                </select>
                <div >
                    <label htmlFor="cardElement">Card Details:</label>
                    <CardElement className="card-element"
                        options={{
                            style: {
                                base: {
                                    fontSize: '14px',
                                    color: '#333',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#ff4242',
                                },
                            },
                        }}
                        id="cardElement"
                    />
                </div>
                <button type="submit" disabled={!stripe}>Pay</button>
            </form>

            {/* Payment success modal */}
            {paymentSuccess && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Your payment is successful!</h2>
                        <h3>Thank you for your subscription.</h3>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;

