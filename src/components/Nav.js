import React from 'react'
import { connect } from 'react-redux'

function Nav ({ authedUser }) {
  return (
    <nav className='nav'>
      <ul>
        <li>Home</li>
        <li>New Question</li>
        <li>Leaderboard</li>
        {authedUser ? <li>Hello {authedUser}!</li> : ''}
      </ul>

    </nav>
  )
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)
