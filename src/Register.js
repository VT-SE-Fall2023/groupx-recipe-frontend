import React, { useState } from 'react';
import './css/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const handlePasswordChange = (event) => {
        // You can implement password encoding logic here
        setPassword(event.target.value);
    };

    const handleConfirmedPasswordChange = (event) => {
        setConfirmedPassword(event.target.value);
    };

    const handleRegister = () => {
        // Implement your register logic here
        console.log('Regsiter with:', username, password);
    };

    return (
        <div className="register-container">
            <div className="register-background">
                <div className="left-box">
                </div>
                <div className="right-box">
                    <div className="register-form">
                        <h2 className="welcome-text">Create an Account</h2>
                        <h4 className="welcome-sub-text">Join us to save your favorite recipe!</h4>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmedPassword}
                            onChange={handleConfirmedPasswordChange}
                        />
                        <button className="register-button" onClick={handleRegister}>
                            Register
                        </button>
                        <div className="register-options">
                            <button className="register-google">
                                Register with Google
                                <img src={require('./img/google_icon.png')} alt="Google Logo" />
                            </button>
                            <button className="register-apple">
                                Register with Apple
                                <img src={require('./img/apple_icon.png')} alt="Apple Logo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
