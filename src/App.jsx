import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are by definition not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // state for the currently displayed anecdote
  const [selected, setSelected] = useState(0)

  // state array for storing votes, starting with all zeros
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // handler to pick a random anecdote index
  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  // handler to vote for the currently active anecdote
  const handleVoteClick = () => {
    // copy the state array first to avoid mutating state directly
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // find the highest number of votes
  const maxVotes = Math.max(...votes)
  // find the index of that highest number
  const mostVotedIndex = votes.indexOf(maxVotes)

  return (
    <div>
      {/* Section 1: Anecdote of the day */}
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>

      {/* Section 2: Anecdote with most votes */}
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App