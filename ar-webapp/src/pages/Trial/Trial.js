import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Trial.css';


export class Trial extends Component {
    render() {
        return (
            <div className='trial-container'>
                <h1>Welcome</h1>
                <div className='trial-content'>

                    <div className='trial-info'>
                        <h2>Free trial Subscription</h2>
                        <h1>14 Days Free Trial</h1>
                        <Link to="/home" className="trial-btn"><button>Start Free Trial</button></Link>
                    </div>


                </div>

                <Link to="/sub-plan"><button className="select-sub-btn">Explore Pricing</button></Link>
            </div>
        );
    }
}

export default Trial;
