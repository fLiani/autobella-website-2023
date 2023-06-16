import React, {Component} from 'react';
import logo from '../assets/Logo-2.png'
import './/Navbar.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {ImLocation} from "react-icons/im";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="info">
                    <div className="specialist">
                        <h5>The International Fiat, Ferrari, and Alfa Romeo Specialists</h5>
                    </div>
                    <p className="info-line">Phone: +44 (0) 7478 312403</p>
                    <p className="info-line">Sales Team: sales@auto-bella.co.uk</p>
                    <div className="location">
                        <ImLocation></ImLocation>
                        <p>Stevenage, Hertfordshire, United Kingdom</p>
                    </div>
                </div>

                <div className="hamburgerMenu">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </div>
            </div>
        );
    }
}

export default Navbar;