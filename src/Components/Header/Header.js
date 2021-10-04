// header set
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/Logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="d-flex justify-content-start mt-2">
            <img className="ms-5 mt-1" src={Logo} alt="" />
            <div className="m-5 mt- d-inline">
                <NavLink to="/Home" className="text-decoration-none  p-2 fs-5" activeClassName="selected">Home</NavLink>
                <NavLink to="/Courses" className="text-decoration-none  p-2 fs-5" activeClassName="selected">Courses</NavLink>
                <NavLink to="/About" className="text-decoration-none  p-2 fs-5" activeClassName="selected">About</NavLink>
                <NavLink to="/Contact-us" className="text-decoration-none  p-2 fs-5 " activeClassName="selected">Contact us</NavLink>
            </div>
        </div>
    );
};

export default Header;