import React from 'react';
import './css/Header.css'

function Header() {
    const HeaderStyle = {
        backgroundColor: 'white',
        padding: '16px',
        fontSize: '24px',
        fontWeight: 800,
    };

    const smallTextStyle = {
        fontSize: '14px',
    };

    return (
        <div style={HeaderStyle}>
            <div>GroupX</div>
            <div>
                <p>About Us</p>
                <button>Login</button>
            </div>
        </div>
    );
}

export default Header;