// Content.js

import React, { Component } from 'react';
import './Content.css';
import arImg from '../../images/ar-img.jpg';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div id="content" className="content-section">
                <div className="content-container">
                    <h1 className="content-sub-title">Explore AR Experiences</h1>
                    <div className="row">
                        {/* Card 1 */}
                        <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 1</h2>
                            <p>Description of AR Experience 1.</p>
                            <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 2</h2>
                            <p>Description of AR Experience 2.</p>
                            <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                          {/* Card 3 */}
                          <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 3</h2>
                            <p>Description of AR Experience 3.</p>
                            <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 4</h2>
                            <p>Description of AR Experience 4.</p>
                            <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                          {/* Card 5 */}
                          <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 5</h2>
                            <p>Description of AR Experience 5.</p>
                            <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="card">
                            <img src={arImg} alt="AR" />
                            <h2>AR Experience 6</h2>
                            <p>Description of AR Experience 6.</p>
                             <div className="content-buttons">
                                <Link to="/exp" className="button-exp">Experience AR</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
