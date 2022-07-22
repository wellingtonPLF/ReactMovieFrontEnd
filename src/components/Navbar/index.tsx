import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './style.css'

const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <FontAwesomeIcon icon={faGithub} style={{fontSize: '25'}}/>
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;