import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

function Dashboard ({ authedUser, users, questions }) {
  return (
    <div className='container'>
      <Nav />
      <div className='centered'>
        <div>
          <a href='/#' className='active'>Unanswered</a>
          <a href='/#' className=''>Answered</a>
        </div>

      </div>
    </div>
  )
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Dashboard)
