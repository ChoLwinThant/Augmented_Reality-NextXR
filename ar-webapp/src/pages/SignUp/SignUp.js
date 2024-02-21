import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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

        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('confirmPass', this.state.confirmPass);

    }
    render() {
        return (
            <div className="signup-container">
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
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
                    <div className="form-group">
                        <label htmlFor="confirmPass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPass"
                            id="confirmPass"
                            value={this.state.confirmPass}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
            </div>
        );
    }
}

export default SignUp;