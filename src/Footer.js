import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#378C84',
        textAlign: 'center',
        padding: '16px',
        fontSize: '24px',
        fontWeight: 800,
    };

    const smallTextStyle = {
        fontSize: '14px',
    };

    return (
        <div style={footerStyle}>
            <div>GroupX</div>
            <div style={smallTextStyle}>
                &copy; {new Date().getFullYear()} GroupX Inc. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
