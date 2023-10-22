import React from 'react';
import './css/Header.css'

function Header() {
    return (
        <div className='header'>
            <p id="logo">GroupX</p>
            <div className="about-login">
                <p id='about'>About Us</p>
                <button id='login-button'>Login</button>
            </div>
        </div>
    );
}

export default Header;