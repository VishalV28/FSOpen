import React from 'react'

export default function PersonForm({persons, setPersons, newName, setNewName, newNumber, setNewNumber, newId, setNewId }) {

  const addPerson = (event) =>{
    event.preventDefault();
    if(persons.find(({name}) => name === newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    setNewId(newId => ++newId)
    const newPerson = {
      name: newName,
      number: newNumber,
      id: newId
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}
