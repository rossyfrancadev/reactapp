import React from 'react';
import '../styles/pure-min.css';
import '../styles/side-menu.css';
export default class SideMenu extends React.Component {

    render() {
        return (

            <div >
                <a href="#menu" id="menulink" className="menuLink">
                    <span></span>
                </a>
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">BAR WEB</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item "><a href="#" className="pure-menu-link ">Home</a></li>
                            <li className="pure-menu-item menu-item-divided ">
                                <a href="#" className="pure-menu-link">Products</a>
                            </li>
                            <li className="pure-menu-item menu-item-divided"><a href="#" className="pure-menu-link ">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}