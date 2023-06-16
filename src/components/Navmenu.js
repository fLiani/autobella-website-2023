import React, {Component} from 'react';
import './/Navmenu.css'

class Navmenu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="">CARS</a></li>
                    <li><a href="https://autobellaparts.com">PARTS</a></li>
                    <li><a href="">MODERN</a></li>
                    <li><a href="">CONTACT US</a></li>
                </ul>
            </div>
        );
    }
}

export default Navmenu;