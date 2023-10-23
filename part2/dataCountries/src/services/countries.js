import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const openWeatherUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getOne = (name) => {
    const request = axios.get(`${baseUrl}/name/${name}`)
    return request.then(response => response.data)
}

const getWeather = (capital) => {
    const request = axios.get(`${openWeatherUrl}?q=${capital}&APPID=${apiKey}`)
    return request.then(response => response.data)
}

export default { getAll, getOne, getWeather }