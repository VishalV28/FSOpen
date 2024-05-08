import React from 'react'

function Course({course}) {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course

const Header = ({name}) => (<h2>{name}</h2>)
  
const Content = ({parts}) => {
    return(
    <div>
        {parts.map(part => (
        <Part part={part} key={part.id}/>
    ))}
    </div>
    )
}

const Total = ({parts}) => {
    const totalEx = parts.reduce(
        (exercises, part) => exercises + part.exercises,
        0
      );
    return (<h3>Total of {totalEx} exercises </h3>)
}
  
const Part = ({part}) => (<p>{part.name} {part.exercises}</p>)
