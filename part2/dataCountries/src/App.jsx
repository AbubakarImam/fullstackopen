import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Countries from './components/Countries'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleValueChange = (e) => {
    const inputValue = e.target.value
    setValue(inputValue)

    if (inputValue === '') {
      setSelectedCountry(null)
      countriesService
        .getAll()
        .then(initialCountries => {
          setCountries(initialCountries)
        })
    } else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCountries(filteredCountries)
    }
  }

  const handleShowCountry = (name) => {
    countriesService
      .getOne(name)
      .then(country => {
        setSelectedCountry(country)
      })
  };

  return (
    <div>
      <div>Find countries <input value={value} onChange={handleValueChange} /></div>
      <Countries countries={countries} handleShowCountry={handleShowCountry} selectedCountry={selectedCountry} />
    </div>
  )
}

export default App