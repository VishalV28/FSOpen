import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const maxIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button1 votes={votes} setVotes={setVotes} selected={selected}></Button1>
      <Button2 setSelected={setSelected} anecdotes={anecdotes}></Button2>
      <MostVotes votes={votes} selected={selected} anecdotes={anecdotes} maxIndex={maxIndex}></MostVotes>
    </div>
  )
}

export default App

const Button1 = (props) => {
    const handleClick = () => {
      const newVotes = [...props.votes]
      newVotes[props.selected] += 1
      props.setVotes(newVotes)
    }
    return <button onClick={handleClick}>vote</button>
}

const Button2 = (props) => {
  const handleClick = () =>{
    //one way to generate random number from 0 to n
    props.setSelected(Math.floor(Math.random()*props.anecdotes.length))
  }
  return <button onClick={handleClick}>Next anecdote</button>
}

const MostVotes = (props) => {
  if(props.votes[props.maxIndex]>0){
    return (
      <div>
        <h3>Anecdote with most votes</h3>
        <p>{props.anecdotes[props.maxIndex]}</p>
        <p>has {props.votes[props.maxIndex]} votes</p>
      </div>
    )
  }
}