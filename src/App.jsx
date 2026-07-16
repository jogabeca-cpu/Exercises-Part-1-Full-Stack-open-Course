import { useState } from 'react'

// simple button component for feedback
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

// component for rendering a single statistic row
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
      
      {/* using HTML table structure to render statistics */}
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive + " %"} />
        </tbody>
      </table>
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
      
      {/* feedback buttons */}
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      
      {/* statistics view */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App