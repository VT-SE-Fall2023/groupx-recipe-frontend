import React from 'react';

function Header() {
    const HeaderStyle = {
        backgroundColor: "var(--primary-color)",
        textAlign: 'center',
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
        </div>
    );
}

export default Header;