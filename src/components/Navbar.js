import React, {Component} from 'react';
import logo from '../assets/Logo-2.png'
import './/Navbar.css'

import {ImLocation} from "react-icons/im";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";

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

                    <div className="details">

                        <div className="phone">
                            <AiFillPhone></AiFillPhone>
                            <p>01438 94 8880</p>
                        </div>

                        <div className="email">
                            <MdEmail></MdEmail>
                            <p> sales@auto-bella.co.uk</p>
                        </div>

                        <div className="location">
                            <ImLocation></ImLocation>
                            <p>Stevenage, Hertfordshire, United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;