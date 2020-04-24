import React from 'react'
import { connect } from 'react-redux'
import User from './User'

function Leaderboard ({ users }) {
  return (
    <div className='leaderboard'>
      <h2>Leaderboard</h2>
      {Object.values(users).map((user) =>
        <User key={user.id} user={user} />)
      }
    </div>
  )
}

function mapStateToProps ({ users }) {
  const usersWithScore = Object.values(users).map((user) => ({
    ...user,
    score: Object.keys(user.answers).length + user.questions.length
  })).sort((a, b) => b.score - a.score)

  return {
    users: usersWithScore
  }
}

export default connect(mapStateToProps)(Leaderboard)
