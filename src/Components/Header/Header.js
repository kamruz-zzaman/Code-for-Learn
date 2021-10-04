import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/Logo.png'

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="" />
            <div>
                <NavLink to="/Home" activeClassName="selected">Home</NavLink>
                <NavLink to="/About" activeClassName="selected">About</NavLink>
                <NavLink to="/Courses" activeClassName="selected">Courses</NavLink>
                <NavLink to="/Contact-us" activeClassName="selected">Contact us</NavLink>
            </div>
        </div>
    );
};

export default Header;