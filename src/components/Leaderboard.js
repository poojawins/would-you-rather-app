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
  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)
