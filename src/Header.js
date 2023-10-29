import React from 'react';
import './css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <p id="logo">GroupX</p>
            <div className="about-login">
                <p id='about'>About Us</p>
                <button id='login-button'>
                    <Link to="/login" id='login-button' className="login-button-header">
                        Login
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Header;