import { fireEvent, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { act } from 'react-dom/test-utils'; // Import act from react-dom for asynchronous actions
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

jest.mock('axios');

function setup() {
    return render(<Router><Register /></Router>);
}

describe('Register component', () => {
    let getByPlaceholderText, getByText, emailInput, passwordInput, confirmPasswordInput, registerButton;

    beforeEach(() => {
        const renderResult = setup();
        getByPlaceholderText = renderResult.getByPlaceholderText;
        getByText = renderResult.getByText;
        emailInput = getByPlaceholderText('Email');
        passwordInput = getByPlaceholderText('Password');
        confirmPasswordInput = getByPlaceholderText('Confirm Password');
        registerButton = getByText('Register');
    });

    test('renders Register component', () => {
        setup();
    });

    test('input fields update state', () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('test123');
        expect(confirmPasswordInput.value).toBe('test123');
    });

    test('displays error for mismatched passwords', () => {
        fireEvent.change(passwordInput, { target: { value: 'test123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'test1234' } });
        fireEvent.click(registerButton);

        expect(getByText('Passwords do not match')).toBeInTheDocument();
    });


    test('after click register button, should request api once', async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

        axios.post.mockResolvedValue({ data: { "message": "Account created" } });
        // Use act to wait for asynchronous actions to complete
        await act(async () => {
            fireEvent.click(registerButton);
        });

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    });

    test('redirects to /registration-success on successful registration', async () => {
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'test123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

        axios.post.mockResolvedValue({ data: 'Registration successful' });
        // Use act to wait for asynchronous actions to complete
        await act(async () => {
            fireEvent.click(registerButton);
        });

        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
        await waitFor(() => {
            // Assert that the component has redirected to '/registration-success'
            expect(window.location.pathname).toBe('/registration-success');
        });
    });
});
