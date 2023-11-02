import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const { pathname } = useLocation();
    return (
        <div className='header'>
            <p id="logo">GroupX</p>
            <div className="about-login">
                <Link id='about' to='/history'>
                    History
                </Link>
                <button id='login-button'>
                    <Link id='login-button' className="login-button-header"
                        to={pathname === '/login' ? '/register' : '/login'}>
                        {pathname === '/login' ? 'Register' : 'Login'}
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Header;