import { fireEvent, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { act } from 'react-dom/test-utils'; // Import act from react-dom for asynchronous actions
import Register from './Register';
test('renders Register component', () => {
    render(<Register />);
});

test('input fields update state', () => {
    const { getByPlaceholderText } = render(<Register />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('test123');
    expect(confirmPasswordInput.value).toBe('test123');
});

test('displays error for mismatched passwords', () => {
    const { getByText, getByPlaceholderText } = render(<Register />);
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const registerButton = getByText('Register');

    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test1234' } });
    fireEvent.click(registerButton);

    expect(getByText('Passwords do not match')).toBeInTheDocument();
});

jest.mock('axios');


test('after click register button, should request api once', async () => {
    const { getByText, getByPlaceholderText } = render(<Register />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const registerButton = getByText('Register');

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


test.skip('redirects to /registration-success on successful registration', async () => {
    const { getByText, getByPlaceholderText } = render(<Register />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const registerButton = getByText('Register');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'test123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test123' } });

    axios.post.mockResolvedValue({ data: 'Registration successful' });
    // Use act to wait for asynchronous actions to complete
    await act(async () => {
        fireEvent.click(registerButton);
    });

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    // TODO: after solving CROS problem with backend, check this test
    await waitFor(() => {
        // Assert that the component has redirected to '/registration-success'
        expect(window.location.pathname).toBe('/registration-success');
    });
});

