import { useState } from 'react'


// simple button component for feedback
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

// component for rendering a single statistic line
const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}


// component for showing all statistics
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  // render this if no feedback has been given yet
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  // calculations
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  return (
    <div>
      <h1>Statistics</h1>
      
      {/* using StatisticLine component for each row */}
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
    </div>
  )
}


const App = () => {
  // states for each button
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      
      {/* using the new Button component */}
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      {/* statistics view */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App