import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',

        };
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('confirmPass', this.state.confirmPass);

    }

    render() {
        return (
            <div className="login-container">
                <h2>Welcome back again</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input
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
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
                <p>Not Registered? <Link to="/signup" className="signup-link">Sign Up</Link></p>
                <p><Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link></p>
            </div>
        );
    }
}

export default Login