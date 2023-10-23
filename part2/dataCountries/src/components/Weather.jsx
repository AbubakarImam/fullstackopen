import { useState, useEffect } from 'react'
import countriesService from '../services/countries'
function Weather({ capital }) {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        countriesService
            .getWeather(capital)
            .then(weatherData => {
                setWeather(weatherData)
            })
    }, [capital])

    if (!weather) {
        return null
    }

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Conditions: {weather.weather[0].description}</p>
            <img src={iconUrl} alt="Weather Icon" />
            <p>Wind: {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather