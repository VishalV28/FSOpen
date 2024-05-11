import  axios from 'axios';
import React from 'react'

export default function PersonForm({newName, setNewName, newNumber, setNewNumber, addPerson}) {

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
