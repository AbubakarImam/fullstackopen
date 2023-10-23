import CountryInfo from "./CountryInfo"
function Countries({ countries, selectedCountry, handleShowCountry }) {
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    return (
        <div>
            {countries.map(country => <div key={country.ccn3}>
                {country.name.common}
                <button onClick={() => handleShowCountry(country.name.common)}>show</button>
            </div>)}
            {selectedCountry && <CountryInfo country={selectedCountry} />}
        </div>
    )
}

export default Countries