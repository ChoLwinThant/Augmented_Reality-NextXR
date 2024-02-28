import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import signupImg from '../../images/signup.png'
import './SignUp.css';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPass: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/trial');
    }

    render() {
        return (
            <div className="signup-page">
                <div className="signup-form-container">
                    <h2>Welcome</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                className='signup-input'
                                type="email"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Username:</label>
                            <input
                                className='signup-input'
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                className='signup-input'
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass">Confirm Password:</label>
                            <input
                                className='signup-input'
                                type="password"
                                name="confirmPass"
                                id="confirmPass"
                                value={this.state.confirmPass}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <button className='signup-btn' type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
                </div>
                <div className="additional-info">
                    <h3>Enhance Your Business with Augmented Reality</h3>
                    <img src={signupImg} alt="Description" />
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);
