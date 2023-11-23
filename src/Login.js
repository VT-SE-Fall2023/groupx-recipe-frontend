import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import { useEmailContext } from './context/EmailContext';
import { setUserHistory } from './context/HistoryContext'
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {handleLoginEmail} = useEmailContext();

    const handlePasswordChange = (event) => {
        // You can implement password encoding logic here
        setPassword(event.target.value);
    };  

    const handleLogin = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + "/user/login";

        const userData = {
            email: username,
            password: password,
        };
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log('Logged in with token:', token);

                // Store the token in localStorage and token context
                localStorage.setItem('token', token);
                handleLoginEmail(username);
                fetchUserHistory();
                navigate('/');
            } else {
                // Handle login errors, e.g., incorrect credentials
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const fetchUserHistory = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + "/user/recipeHistory"
        
        axios.post(apiUrl,{email: username})
        .then((response) => {
            // Handle the success response, e.g., redirect to a login page
            console.log('Recipe fetched succeed', response.data);
            setUserHistory(response.data);
        })
        .catch((error) => {
            // Handle the error, e.g., display an error message
            console.error('Recipe history fetch failed:', error);
        });
    } 

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="left-box">
                </div>
                <div className="right-box">
                    <div className="login-form">
                        <h2 className="welcome-text">Welcome Back</h2>
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
        </div>
    );
};

export default Login;
