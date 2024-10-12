import React, { FormEvent, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Alert, TextField } from '@mui/material';

// Define types for country and weather data
interface InitCountry {
    capital: string[];
    population: number;
    latlng: number[];
    flags: {
        svg: string;
    };
}

interface InitCountryWeatherInfo {
    temperature: number;
    weather_icons: string[];
    wind_speed: number;
    precip: number;
}

// API constants for better organization
const COUNTRY_API_URL = 'https://restcountries.com/v3.1/name/';
const WEATHER_API_URL = 'http://api.weatherstack.com/current';
const WEATHER_API_KEY = '60774ad1b455f3cff7d3f8a273f488f5';

export const CountryDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>(); // Use 'name' from the route
    const [countryInfo, setCountryInfo] = useState<InitCountry | null>(null); // Nullable type
    const [capitalName, setCapitalName] = useState<string>('');
    const [weatherInfo, setWeatherInfo] = useState<InitCountryWeatherInfo | null>(null);
    const [stateWeatherInfo, setStateWeatherInfo] = useState<InitCountryWeatherInfo | null>(null);
    const [cityWeatherInfo, setCityWeatherInfo] = useState<InitCountryWeatherInfo | null>(null);

    const [countryApiError, setCountryApiError] = useState<boolean>(false);
    const [weatherApiError, setWeatherApiError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingWeather, setLoadingWeather] = useState<boolean>(false); // Separate weather loading state
    const navigate = useNavigate();

    // State for user input
    const [stateName, setStateName] = useState<string>(''); // To handle state weather
    const [cityName, setCityName] = useState<string>(''); // To handle city weather

    // Fetch country data from the REST Countries API
    const getCountryData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${COUNTRY_API_URL}${name}`);
            const data = response.data;
            setCountryInfo(data[0]); // Assuming the first item in the response array
            setCapitalName(data[0].capital[0]); // Set the capital
            setCountryApiError(false);
        } catch (error) {
            setCountryApiError(true);
        } finally {
            setLoading(false);
        }
    }, [name]);

    // Fetch country data when component mounts
    useEffect(() => {
        getCountryData();
    }, [getCountryData]);

    // Fetch weather details based on the capital name (country)
    const getWeatherDetails = async (location: string, setWeather: React.Dispatch<React.SetStateAction<InitCountryWeatherInfo | null>>, setError: React.Dispatch<React.SetStateAction<boolean>>) => {
        setLoadingWeather(true);
        try {
            const response = await axios.get(
                `${WEATHER_API_URL}?access_key=${WEATHER_API_KEY}&query=${location}`
            );
            setWeather(response.data.current);
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoadingWeather(false);
        }
    };

    // Handle form submit to get state and city weather
    const handleWeatherSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // Fetch weather for state and city
        if (stateName) {
            await getWeatherDetails(stateName, setStateWeatherInfo, setWeatherApiError);
        }
        if (cityName) {
            await getWeatherDetails(cityName, setCityWeatherInfo, setWeatherApiError);
        }
    };

    // Navigate back to the home page
    const getBackToHome = (e: FormEvent) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <Container maxWidth="md">
            <div>
                <h1>Country Details</h1>

                {loading ? (
                    <p>Loading country data...</p>
                ) : countryApiError ? (
                    <Alert severity="warning" sx={{ m: 2 }}>
                        Country info not found!
                    </Alert>
                ) : countryInfo ? (
                    <div data-testid="country-info">
                        <p>Capital: {countryInfo.capital[0]}</p>
                        <p>Population: {countryInfo.population.toLocaleString()}</p>
                        <p>
                            Latitude: {countryInfo.latlng[0]}
                            <sup>o</sup>
                        </p>
                        <p>
                            Longitude: {countryInfo.latlng[1]}
                            <sup>o</sup>
                        </p>
                        <small>Country Flag:</small>
                        <br />
                        <img src={countryInfo.flags.svg} height="70px" alt="Country flag" />
                    </div>
                ) : null}

                <form onSubmit={handleWeatherSubmit}>
                    <TextField
                        label="State Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                    />
                    <TextField
                        label="City Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                    <Button size="medium" variant="contained" type="submit">
                        Get State & City Weather
                    </Button>
                </form>

                {/* Display country capital weather */}
                {loadingWeather ? (
                    <p>Loading weather data...</p>
                ) : weatherApiError ? (
                    <Alert severity="warning">Weather info not found. Please try again!</Alert>
                ) : weatherInfo ? (
                    <div className="weather-content" data-testid="weather-details">
                        <h3>Weather Info for Capital ({capitalName})</h3>
                        <img src={weatherInfo.weather_icons[0]} alt="Weather Icon" />
                        <p>Temperature: {weatherInfo.temperature}<sup>o</sup></p>
                        <p>Wind Speed: {weatherInfo.wind_speed} km/h</p>
                        <p>Precipitation: {weatherInfo.precip} mm</p>
                    </div>
                ) : null}

                {/* Display state weather */}
                {stateWeatherInfo && (
                    <div className="weather-content" data-testid="state-weather-details">
                        <h3>Weather Info for State ({stateName})</h3>
                        <img src={stateWeatherInfo.weather_icons[0]} alt="Weather Icon" />
                        <p>Temperature: {stateWeatherInfo.temperature}<sup>o</sup></p>
                        <p>Wind Speed: {stateWeatherInfo.wind_speed} km/h</p>
                        <p>Precipitation: {stateWeatherInfo.precip} mm</p>
                    </div>
                )}

                {/* Display city weather */}
                {cityWeatherInfo && (
                    <div className="weather-content" data-testid="city-weather-details">
                        <h3>Weather Info for City ({cityName})</h3>
                        <img src={cityWeatherInfo.weather_icons[0]} alt="Weather Icon" />
                        <p>Temperature: {cityWeatherInfo.temperature}<sup>o</sup></p>
                        <p>Wind Speed: {cityWeatherInfo.wind_speed} km/h</p>
                        <p>Precipitation: {cityWeatherInfo.precip} mm</p>
                    </div>
                )}

                {countryApiError && (
                    <Button size="medium" variant="contained" onClick={getBackToHome}>
                        Please try again
                    </Button>
                )}
            </div>
        </Container>
    );
};
