import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

    const handleLogout = () => {
        // Remove the token from localStorage or perform any other necessary cleanup
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className='header'>
            <Link id="logo" to='/'>GroupX</Link>
            <div className="about-login">
                <Link id='about' to='/history'>
                    History
                </Link>
                {isAuthenticated ? ( // Render the "Logout" button if the user is authenticated
                    <button id='login-button' onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button id='login-button'>
                        <Link id='login-button' className="login-button-header" to={pathname === '/login' ? '/register' : '/login'}>
                            {pathname === '/login' ? 'Register' : 'Login'}
                        </Link>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;