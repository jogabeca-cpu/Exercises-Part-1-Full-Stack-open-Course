import { useState } from 'react'

// component for showing statistics
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  // render this if no feedback has been given yet
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  // calculations (no division by zero risk because of the check above)
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
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
      <h1>give feedback</h1>
      
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      {/* render the component and pass states as props */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App