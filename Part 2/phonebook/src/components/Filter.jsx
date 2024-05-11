import React from 'react'

export default function Filter({value, handleFilter}) {
  return (
    <div>
      Filter shown with <input value={value} onChange={handleFilter} />
    </div>
  )
}
