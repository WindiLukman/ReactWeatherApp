import Button from "react-bootstrap/Button";

import "./App.css";
import icon128 from "./assets/images/icon128.png";
import { useEffect, useState } from "react";

function App() {
    const [cityInput, setCityInput] = useState("");

    // Listens on changes in cityInput and then performs the function as intended
    // This hook depends on the deps variable to run the func
    useEffect(() => {
        console.log(cityInput);
    }, [cityInput]);

    // This hook runs on an empty arrayed dep
    // This hook will only run once the page is loaded
    useEffect(() => {
        console.log("This page is loaded");
    }, []);

    // This hook runs once any state is updated
    useEffect(() => {
        console.log("Everything else is updated");
    });

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
                            onClick={() => {
                                alert("This function is not available yet");
                            }}
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

            <div id="weatherInfoComponent" style={{ display: "none" }}>
                <table class="centerContainer" cellpadding="5px">
                    <tr>
                        <th class="customTableHeader">Temperature</th>
                        <td id="temperatureField">0</td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Feels Like</th>
                        <td id="feelsLikeField">0</td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Humidity</th>
                        <td id="humidityField">0</td>
                    </tr>
                    <tr>
                        <th class="customTableHeader">Atmospheric Pressure</th>
                        <td id="pressureField">0</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default App;