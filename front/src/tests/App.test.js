import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('navigates to about page', () => {
    render(
        <Router>
            <App />
        </Router>
    );

    const aboutLink = screen.getByRole('link', { name: /About/i });
    expect(aboutLink).toBeInTheDocument();

    // Simulate clicking the 'About' link
    userEvent.click(aboutLink);

    const aboutElement = screen.getByText(/About Boulder Bike Tour/i);
    expect(aboutElement).toBeInTheDocument();
});
