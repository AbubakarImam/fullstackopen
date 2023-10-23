import Weather from "./Weather"
function CountryInfo({ country }) {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                {Object.values(country.languages).map((language) => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt="flag" />
            <Weather capital={country.capital} />

        </div>
    )
}

export default CountryInfo