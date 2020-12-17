import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false);
    const hamburgerClick = () => {
        setNavMenu(!navMenu)
    }

    return (
        <nav>
            <Link className="nav-brand" to="#">ReactEPL</Link>
            <ul style={{display: navMenu && ("flex")}} className="link-container">
                <li><Link className="nav-links" to="/">Home</Link></li>
                <li><Link className="nav-links" to="/tables">Tables</Link></li>
                <li><Link className="nav-links" to="/fixtures">Fixtures</Link></li>
                <li><Link className="nav-links" to="/results">Results</Link></li>
            </ul>
            <div onClick={hamburgerClick} className="hamburger">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
        </nav>
    )
}

export default Navbar
