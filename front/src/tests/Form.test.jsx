import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/Form';

describe('Form component', () => {
    test('displays validation error when slogan exceeds character limit', () => {
        const { screen } = render(<Form />);
        const sloganInput = screen.getByLabelText('Slogan idea 💭');

        fireEvent.change(sloganInput, {
            target: {
                value: 'This is a slogan idea longer than 50 characters.',
            },
        });

        const errorMessage = screen.getByText(
            'Slogan idea must be 50 characters or less.'
        );
        expect(errorMessage).toBeInTheDocument();
    });
});
