import axios from 'axios';
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import './css/Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    // const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        // You can implement password encoding logic here
        setPassword(event.target.value);
    };

    const handleConfirmedPasswordChange = (event) => {
        setConfirmedPassword(event.target.value);
    };

    const handleRegister = () => {
        // Check if passwords match
        if (password !== confirmedPassword) {
            // Passwords don't match
            setPasswordsMatch(false);
            console.log('Passwords do not match');
        } else {
            setPasswordsMatch(true);
            // Perform the HTTP POST request to the API
            const apiUrl = `${process.env.REACT_APP_API_URL}/user/register`;
            axios.post(apiUrl, { email: email, password: password })
                .then((response) => {
                    // Handle the success response, e.g., redirect to a login page
                    console.log('Registration successful:', response.data);
                    // Registration successful, redirect to the success page
                    redirect('/registration-success');
                })
                .catch((error) => {
                    // Handle the error, e.g., display an error message
                    console.error('Registration failed:', error);
                });
        }
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
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button className="register-button" onClick={handleRegister} disabled={!passwordsMatch}>
                            Register
                        </button>
                        {!passwordsMatch && <p className="password-mismatch-error">Passwords do not match</p>}
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
