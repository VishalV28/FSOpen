import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad+1)} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App

const Button = (props) => { 
  return(
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const total = (props) => {
    return props.good+props.neutral+props.bad
  }
  const avg = (props) => {
    return Math.round(((props.good-props.bad)/total(props))*100)/100
  }
  const positive = (props) =>{
    return Math.round((props.good/total(props)*100)*100)/100
  }
  if(total(props)===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <table>
        <tr><StatisticLine text="good" value={props.good}/></tr>
        <tr><StatisticLine text="neutral" value={props.neutral}/></tr>
        <tr><StatisticLine text="bad" value={props.bad}/></tr>
        <tr><StatisticLine text="all" value={total(props)}/></tr>
        <tr><StatisticLine text="average" value={avg(props)}/></tr>
        <tr><StatisticLine text="positive" value={positive(props)} sign="%"/></tr>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
      <td>{props.sign}</td>
    </>
  )
}
