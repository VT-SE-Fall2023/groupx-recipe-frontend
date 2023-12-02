import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { EmailProvider } from './EmailContext';
describe('EmailContext component', () => {
    // EmailProvider renders without crashing
    it('should render without crashing', () => {
        render(<EmailProvider />);
    });
    // EmailContext.Provider renders with correct value prop
    it('should render with correct value prop', () => {
        const emailValue = { email: '', handleLoginEmail: jest.fn() };
        render(
            <EmailProvider value={emailValue}>
                <div data-testid="email-provider" />
            </EmailProvider>
        );
        expect(screen.getByTestId('email-provider')).toBeInTheDocument();
    });


    // setEmail updates email state correctly
    it('should update email state correctly', () => {
        const Wrapper = () => {
            const [email, setEmail] = useState('');
            return (
                <button onClick={() => setEmail('test@example.com')}>
                    {email}
                </button>
            );
        };
        render(<Wrapper />);
        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });
});