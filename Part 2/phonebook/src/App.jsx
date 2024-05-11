import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personServices from './services/personServices'
import "./index.css"

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState('')
  const [newId, setNewId] = useState(0)

  const hook = () => {
    personServices.getAll().then(data => setPersons(data))
  }
  useEffect(hook, [])

  const addPerson = (event) =>{
    event.preventDefault()
    const tempPerson = persons.find((persons) => persons.name === newName)
    if(tempPerson){
      if(tempPerson.number === newNumber){
        window.alert(`${newName} is already added to phonebook`)
      }
      else{
        window.confirm(
          `${newName} is already added, replace the old number with a new one?`) && updateNumber(tempPerson, newNumber);
      }
      setNewName('')
      setNewNumber('')
      return
    }
    setNewId(newId => persons.length + 1)
    const newPerson = {
      name: newName,
      number: newNumber,
      id: newId
    }
    personServices.create(newPerson).then((data)=> {
      setPersons(persons.concat(data))
      setNewName('')
      setNewNumber('')
    })
  }

  const updateNumber = (person, number) => {
    const updatedPerson = {...person, number}
    const updatedPersons = persons.map(i => i.id === updatedPerson.id ? updatedPerson : i)
    personServices.update(updatedPerson.id, updatedPerson)
      .then(() => {
        setPersons(updatedPersons)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error)
      })
  }
  const deletePerson = (person) => {
    window.confirm(`Delete ${person.name} ?`) && personServices
      .remove(person.id)
      .then(setPersons(persons.filter(i => i.id !== person.id)))
  }

  const handleChange = setterFunc => event => setterFunc(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filtered} handleFilter={handleChange(setFiltered)}/>
      <h3>Add a new</h3>
      <PersonForm  newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filtered?persons.filter((person) => person.name.toUpperCase().includes(filtered.toUpperCase())): persons} handleDelete={deletePerson}/> 
    </div>
  )
}

export default App