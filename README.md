# 🌍 CountryWeather App ⛅

Welcome to **CountryWeather** – your one-stop app for checking weather details by country, state, and city! This app uses the power of React, TypeScript, and APIs to deliver weather information for any location worldwide 🌎.

[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-4.5-blue)](https://www.typescriptlang.org/) [![REST Countries](https://img.shields.io/badge/REST%20Countries-API-green)](https://restcountries.com/) [![Weatherstack](https://img.shields.io/badge/Weatherstack-API-orange)](https://weatherstack.com/)

## 🌟 Features

- **Country Information**: Get details like capital, population, and latitude/longitude of any country. 🏳️‍🌈
- **State and City Weather**: Check current weather conditions for specific states and cities 🌦️.
- **Real-time Data**: Live weather updates using the **Weatherstack API**.
- **Interactive UI**: Clean and responsive design built with **Material-UI** for an enhanced user experience 🖥️.

## 🚀 Demo

🌐 **Live URL**: [CountryWeather Demo](https://your-demo-link.com)

## 📸 Screenshots

| Country Details Page | Weather Details Page | 
| :------------------: | :------------------: |
| ![Country](https://github.com/hari7261/CountryWeather/blob/main/github/Screenshot%202024-10-12%20153204.png) | ![Weather](https://github.com/hari7261/CountryWeather/blob/main/github/Screenshot%202024-10-12%20153242.png) |

## 🏁 Getting Started

### 📦 Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (v14 or higher) 🟢
- **npm** or **yarn** 📦

### ⚙️ Installation

Clone the repository and navigate into the project folder:

```bash
git clone https://github.com/hari7261/CountryWeather.git
cd CountryWeather
```

Install the required dependencies:

```bash
npm install
```

### 🌐 API Keys Setup

To fetch data, the app requires API keys for the **Weatherstack** API. Create an account and get your free API key [here](https://weatherstack.com/).

Once you have the key, create a `.env` file in the root directory and add:

```bash
REACT_APP_WEATHER_API_KEY=your_weatherstack_api_key_here
```

### 🚴 Running the App

To start the app, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🗺️ Usage

1. **Home Page**:
   - Enter the name of a country to get its details.
   
2. **Country Details Page**:
   - View the capital, population, latitude, and longitude.
   - Click on the **"Get Capital Weather"** button to fetch weather info for the capital city.
   
3. **State and City Weather**:
   - Input a state or city name to retrieve specific weather data.

## 🔑 Key Features Overview

| Feature                         | Description                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------- |
| 🌍 Country Info                  | Fetches details like capital, population, and location from the **REST Countries API**.      |
| ☀️ Weather Information           | Displays real-time weather details using **Weatherstack API**.                               |
| 🏙️ City and State Weather        | Users can input a state or city to get more localized weather data.                          |
| 📱 Responsive UI                 | Mobile-friendly design using **Material-UI**.                                                |
| 🔍 Search & Navigation           | Easily navigate through different locations with search and intuitive buttons.               |

## 🔧 Technologies Used

| Technology               | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| **React**                | Frontend library for building user interfaces.          |
| **TypeScript**           | Typed superset of JavaScript for scalable development.  |
| **Material-UI**          | UI components framework for a responsive design.        |
| **REST Countries API**    | Provides country information like capital, population. |
| **Weatherstack API**      | Provides real-time weather data for locations.         |
| **Axios**                | HTTP client for making API requests.                   |

## 🏗️ Project Structure

```bash
CountryWeather/
├── public/             # Public assets
├── src/                # Main source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page components (Home, CountryDetails)
│   ├── utils/          # Utility functions (test utils, helpers)
│   ├── App.tsx         # Main app component
│   ├── index.tsx       # React entry point
│   └── ...
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## 🌈 Country Weather Sample Requests

Want to see it in action? Try these sample country names:

| Country Name  | Weather Details |
| ------------- | --------------- |
| 🇮🇳 **India**  | Get the weather for New Delhi 🏙️ |
| 🇺🇸 **USA**    | Check the weather in Washington, D.C. 🌦️ |
| 🇧🇷 **Brazil** | View the weather in Brasília ☀️  |
| 🇯🇵 **Japan**  | See the Tokyo weather forecast 🌸 |

## 📚 Learn More

- **React Documentation**: [reactjs.org](https://reactjs.org/)
- **TypeScript Documentation**: [typescriptlang.org](https://www.typescriptlang.org/)
- **Weatherstack API**: [weatherstack.com](https://weatherstack.com/)
- **REST Countries API**: [restcountries.com](https://restcountries.com/)

## 🌐 Contribution Guidelines

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/hari7261/CountryWeather/issues) if you have any suggestions.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

🌟 **Star the repo** if you like the project!

[![GitHub stars](https://img.shields.io/github/stars/hari7261/CountryWeather?style=social)](https://github.com/hari7261/CountryWeather/stargazers)

---

Made with ❤️ by [Hari](https://github.com/hari7261)

---
