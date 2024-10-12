import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Container } from '@material-ui/core';
import TextField from '@mui/material/TextField';

export const Home: React.FC = () => {
    const [countryName, setCountryName] = useState('');
    const [stateName, setStateName] = useState('');
    const [cityName, setCityName] = useState('');
    const navigate = useNavigate();

    const getWeatherDetails = async (e: FormEvent) => {
        e.preventDefault();
        // Navigate to the details page with country, state, and city in the URL
        navigate(`/details/${countryName}/${stateName}/${cityName}`);
    };

    return (
        <Container maxWidth="md">
            <div className="my-3">
                <h1 className="text-center">Weather App</h1>
                {/* Country Input */}
                <TextField
                    id="country-input"
                    fullWidth
                    value={countryName}
                    label="Enter Country Name"
                    variant="outlined"
                    data-testid="country-input-test-id"
                    onChange={(e) => setCountryName(e.target.value)}
                    margin="normal"
                />
                {/* State Input */}
                <TextField
                    id="state-input"
                    fullWidth
                    value={stateName}
                    label="Enter State/Region Name"
                    variant="outlined"
                    data-testid="state-input-test-id"
                    onChange={(e) => setStateName(e.target.value)}
                    margin="normal"
                />
                {/* City/District Input */}
                <TextField
                    id="city-input"
                    fullWidth
                    value={cityName}
                    label="Enter City/District Name"
                    variant="outlined"
                    data-testid="city-input-test-id"
                    onChange={(e) => setCityName(e.target.value)}
                    margin="normal"
                />
            </div>
            {/* Submit Button */}
            <Button
                size="medium"
                variant="contained"
                data-testid="submit-button-testid"
                disabled={countryName === '' || stateName === '' || cityName === ''}
                onClick={getWeatherDetails}
            >
                Submit
            </Button>
        </Container>
    );
};
