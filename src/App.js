import Button from "react-bootstrap/Button";

import "./App.css";
import icon128 from "./assets/images/icon128.png";
import { useEffect, useState } from "react";
import useGetWeather from "./hooks/useGetWeather";
import useCityStorage from "./hooks/useCityStorage";

function App() {
    const [cityInput, setCityInput] = useState("");
    const { getStorage, setStorage } = useCityStorage();
    const [recentCities, setRecentCities] = useState([]);
    const { data: weatherData, getWeather } = useGetWeather();

    // Listens on changes in cityInput and then performs the function as intended
    // This hook depends on the deps variable to run the func
    useEffect(() => {
        console.log(cityInput);
    }, [cityInput]);

    // This hook runs on an empty arrayed dep
    // This hook will only run once the page is loaded
    useEffect(() => {
        //console.log("This page is loaded");
        //console.log(getStorage());
    }, []);

    // This hook runs once any state is updated
    useEffect(() => {
        //console.log("Everything else is updated");
    });

    const onSubmitButtonClicked = () => {
        getWeather(cityInput);
        setStorage(cityInput);
        setRecentCities(getStorage()); // Update recentCities after adding a new city
    };


    const onClearButtonClick = () => {
        setStorage(null);
        setRecentCities([]);
        setCityInput(""); // Clear the search bar
    };

    const onCityItemClick = (city) => {
        setCityInput(city);
        getWeather(city);
    };


    useEffect(() => {
        //console.log(weatherData);
    }, [weatherData]);

    return (
        <div class="container">
            <h1>Weather App</h1>
            <img src={icon128} alt="icon128" />
            <table class="centerContainer">
                <tr>
                    <td>
                        <label
                            id="cityLabel"
                            for="cityNameTextField"
                            style={{ color: "black" }}
                        >
                            Enter a city:
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            id="cityNameTextField"
                            type="text"
                            name="cityName"
                            value={cityInput}
                            placeholder="i.e. Jakarta, Singapore"
                            onChange={(event) => {
                                setCityInput(event.target.value);
                            }}
                        />
                        <Button
                            onClick={onSubmitButtonClicked}
                            id="submitButton"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </td>
                </tr>
            </table>
            <div class="spacer"></div>
            <div
                id="errorMessageComponent"
                style={{ display: "none", color: "#fc574e" }}
            ></div>

            <div
                id="loader"
                style={{ display: "none" }}
                class="spinner spinner-border"
                role="status"
            >
                <span class="sr-only">Loading...</span>
            </div>

            <div id="weatherInfoComponent" style={{ display: "flex" }}>
                <table class="centerContainer" cellpadding="5px">
                    <tr>
                        <th class="customTableHeader">Temperature</th>
                        <td id="temperatureField">
                            {`${weatherData?.main?.temp ?? "-"}°C`}
                        </td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Feels Like</th>
                        <td id="feelsLikeField">
                            {`${weatherData?.main?.feels_like ?? "-"}°C`}
                        </td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Humidity</th>
                        <td id="humidityField">{`${
                            weatherData?.main?.humidity ?? "-"
                        } %`}</td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Atmospheric Pressure</th>
                        <td id="pressureField">{`${
                            weatherData?.main?.pressure ?? "-"
                        } hPa`}</td>
                    </tr>
                </table>
            </div>

            <div>
                <h2>Recent Cities Searched</h2>
                <ul>
                    {recentCities.map((city, index) => (
                        <li key={index} onClick={() => onCityItemClick(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
                <Button onClick={onClearButtonClick}>Clear</Button>
            </div>

        </div>
    );
}

export default App;