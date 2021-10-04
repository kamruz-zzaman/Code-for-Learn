import React from 'react';
import FooterLogo from '../../Images/Footer-logo.png'

const Footer = () => {
    return (
        <div className="bg-black p-2">
            <img src={FooterLogo} alt="" />
            <p className="f-black fw-bold ">Copyright © 2021 Code for Learn</p>
        </div>
    );
};

export default Footer;