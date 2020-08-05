import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/lovepeach.png'


function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/"><img src={logo} alt="logo" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><NavLink className="nav-link text-right js-scroll-trigger" to="/">Home</NavLink></li>
                            <li className="nav-item"><a className="nav-link text-right js-scroll-trigger" href="/#about">About Me</a></li>
                        <li className="nav-item"><a className="nav-link text-right js-scroll-trigger" href="/#portfolio">Portfolio</a></li>
                        <li className="nav-item"><NavLink className="nav-link text-right js-scroll-trigger" to="/post">Blog</NavLink></li>
                        {/* <li className="nav-item"><a className="nav-link text-right js-scroll-trigger" href="/#team">Skills</a></li> */}
                        <li className="nav-item"><a className="nav-link text-right js-scroll-trigger" href="/#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        </div>
    )
}

export default Navbar
