import React from 'react';
import './Hero.css';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1>React Epl App</h1>
                <p>Support Your Favorite Team</p>
                <div>
                    <Link className="hero-link" to="/tables">Tables</Link>
                    <Link className="hero-link" to="/fixtures">Fixtures</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
