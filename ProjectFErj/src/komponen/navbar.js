import React, { Component } from 'react';
import '../../src/App.css';
// import Route from 'react-router-dom/Route';
import Home from '../Page/home'
import Brand from '../Page/brand'
import { Link, Route } from 'react-router-dom';

import Popup from "reactjs-popup";

import Fade from 'react-reveal/Fade';

class Header extends Component{
    render() {
        return (

    <div>
        <Fade>
        <header id="header">
        <div className="container">

        <div id="logo" className="pull-left"><Link to ="/">
            <img src="img/kipilogo.png" alt="" title="home" /></Link>
            <h1><a href="#hero"></a></h1>
        </div>

        <nav id="nav-menu-container">
            <ul className="nav-menu">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li className="dropdown"><a href="">HOT OFFERS!</a>
                    <Fade><ul>
                    <li>HOT ITEMS!</li>
                    <li>Limited time discount</li>
                    <li>Limited Products</li>
                    </ul></Fade></li>
            <li><a href="#contact">Contact Us</a></li>
            <nav className="nav social-nav pull-right d-none d-lg-inline">

                    <a id="search" title="search" >
                    <Popup trigger={open => (<i className="fa fa-search"></i>

                )}
                    position="bottom left"
                    closeOnDocumentClick
                    >
                    <input type="text" id="searchbar" placeholder="Search"/>
                    </Popup>
                    </a>
                    
                    <a id="ig-icon" title="instagram" href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" ></i></a> 
                    <a id="email-icon" title="email us"><i className="fa fa-envelope" ></i></a> 
                    <a id="sign-in" title="sign in"><i className="fa fa-sign-in" ></i></a>
                </nav>
            </ul>
        </nav>
        
        </div>
        </header>
        </Fade>

    </div>

        )
    }
}


export default Header
