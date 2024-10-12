import { act } from '@testing-library/react';
import { CountryDetails } from '../components/CountryDetails';
import axios from 'axios';
import {
    componentRenderByMemoryRouter,
    toBeExpectByTestId,
    toBeExpectByText,
} from '../utils/testUtils';

describe('Test CountryDetails Componet', () => {
    beforeEach(async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({
            data: [
                {
                    capital: 'India',
                    population: 1359072550,
                    latlng: [3,287260],
                    flags: {
                        png: 'https://flagpedia.net/data/flags/w702/in.webp',
                        svg: 'https://flagpedia.net/data/flags/w702/in.webp',
                    },
                },
            ],
        });
    });

    test('should render CountryDetails component with path "/details/BD"', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <CountryDetails />);
        });

        toBeExpectByText('Country Details');
    });

    test('should render country info', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <CountryDetails />);
        });
        await toBeExpectByTestId('country-info');
    });
});
