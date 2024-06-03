import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import Location from './Location';

jest.mock('axios');

describe('Location component', () => {
    test('renders markers based on fetched data', async () => {
        const mockBikers = [
            {
                id: 1,
                first_name: 'John',
                last_name: 'Doe',
                latitude: 40.015,
                longitude: -105.2705,
            },
        ];

        axios.get.mockResolvedValue({ data: mockBikers });

        render(<Location />);

        await waitFor(() => {
            expect(screen.getByLabelText('John Doe')).toBeInTheDocument();
        });
    });
});
