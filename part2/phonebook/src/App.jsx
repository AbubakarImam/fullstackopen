import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // const addName = (e) => {
  //   e.preventDefault()

  //   const confirm = persons.some(person => person.name === newName && person.number === newNumber)
  //   if (confirm) {
  //     alert(`${newName} and ${newNumber} is already added to phonebook`)
  //   } else {
  //     const personObject = {
  //       name: newName,
  //       number: newNumber,
  //     }
  //     personService
  //       .create(personObject)
  //       .then(returnedPerson => {
  //         setPersons(persons.concat(returnedPerson))
  //         setNewName('')
  //         setNewNumber('')
  //       })
  //   }

  //   console.log('button clicked', e.target);
  // }

  const addName = (e) => {
    e.preventDefault()
    const userExist = persons.find(person => person.name === newName)
    if (userExist) {
      const confirm = window.confirm(`${newName} is already added to phonebook, do you want to update the number?`)
      if (confirm) {
        const updatedUser = { ...userExist, number: newNumber }
        personService
          .update(userExist.id, updatedUser)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
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

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <h1>add a contact</h1>
      <PersonForm {...{ newName, newNumber, handleNameChange, handleNumberChange, addName }} />

      <h2>Numbers</h2>
      {personsToShow.map(person => <Persons key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />)}
      {/* <Persons personsToShow={personsToShow} deletePerson={deletePerson} /> */}
    </div>
  )
}

export default App