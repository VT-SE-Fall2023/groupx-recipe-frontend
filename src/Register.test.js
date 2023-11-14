import { fireEvent, render } from '@testing-library/react';
import React from 'react';
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



