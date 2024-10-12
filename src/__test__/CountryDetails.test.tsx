import { act } from '@testing-library/react';
import { CountryDetails } from '../components/CountryDetails';
import axios from 'axios';
import {
    componentRenderByMemoryRouter,
    toBeExpectByTestId,
    toBeExpectByText,
} from '../utils/testUtils';

describe('Test CountryDetails Component', () => {
    beforeEach(() => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: [
                {
                    capital: 'Dhaka',
                    population: 166303498,
                    latlng: [23.685, 90.3563],
                    flags: {
                        png: 'https://flagpedia.net/data/flags/w702/bd.png',
                        svg: 'https://flagpedia.net/data/flags/w702/bd.svg',
                    },
                },
            ],
        });
    });

    test('should render CountryDetails component with path "/details/BD"', async () => {
        // Render the component and await the result
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <CountryDetails />);
        });

        // Check if the "Country Details" heading is present
        await toBeExpectByText('Country Details');
    });

    test('should render country info', async () => {
        // Render the component
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <CountryDetails />);
        });

        // Ensure the country info element is in the document
        await toBeExpectByTestId('country-info');
    });
});
