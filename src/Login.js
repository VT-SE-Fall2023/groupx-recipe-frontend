import React, { useState } from 'react';
import './css/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        // You can implement password encoding logic here
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="login-form">
                    <h2 className="welcome-text">Welcome back</h2>
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
                    <button className="login-button" onClick={handleLogin}>
                        Login
                    </button>
                    <div className="login-options">
                        <button className="login-google">
                            Login with Google
                            <img src={require('./img/google_icon.png')} alt="Google Logo" />
                        </button>
                        <button className="login-apple">
                            Login with Apple
                            <img src={require('./img/apple_icon.png')} alt="Apple Logo" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
