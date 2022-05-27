import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    // console.log(location);
    const { pathname } = location;
    // console.log(location);
    const splitLocation = pathname.split("/");
    // console.log(splitLocation);

  return (
    <>
     <div className="header-holder services-section text-center animate__animated animate__zoomIn">
        <div className="navigation">
            <ul className="nav">
            <li className={splitLocation[1] === "" ? "list active" : "list"}>
                <NavLink to="/">
                <span className="icon">
                    <i className="fas fa-house-user"></i>
                </span>
                <div className="social__tooltip social__tooltip-bottom">Home</div>
                </NavLink>
            </li>
            <li className={splitLocation[1] === "about" ? "list active" : "list"}>
                <NavLink to="/about">
                <span className="icon">
                    <i className="fas fa-user-alt"></i>
                </span>
                <div className="social__tooltip social__tooltip-bottom">About</div>
                </NavLink>
            </li>
            <li className="list">
                <a href="#portfolio">
                <span className="icon">
                    <i className="fas fa-briefcase"></i>
                </span>
                <div className="social__tooltip social__tooltip-bottom">Portfolio</div>
                </a>
            </li>
            <li className={splitLocation[1] === "blog" ? "list active" : "list"}>
                <NavLink to="/blog">
                <span className="icon">
                    <i className="fas fa-blog"></i>
                </span>
                <div className="social__tooltip social__tooltip-bottom">Blog</div>
                </NavLink>
            </li>
            <li className="list">
                <a href="#contact">
                <span className="icon">
                    <i className="fas fa-phone-alt"></i>
                </span>
                <div className="social__tooltip social__tooltip-bottom">Contact</div>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Header
