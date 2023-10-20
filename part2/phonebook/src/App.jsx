import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (e) => {
    e.preventDefault()

    const confirm = persons.some(person => person.name === newName && person.number === newNumber)
    if (confirm) {
      alert(`${newName} and ${newNumber} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }

    console.log('button clicked', e.target);
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
    console.log(e.target.value);
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
    console.log(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    console.log(e.target.value);
  }

  const personsToShow = filter === '' ? persons :
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <h1>add a contact</h1>
      <PersonForm {...{ newName, newNumber, handleNameChange, handleNumberChange, addName }} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App