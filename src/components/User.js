import React from 'react'
import { Card } from 'react-bootstrap'

export default function User ({ user }) {
  return (
    <Card className='user'>
      <Card.Header>{user.name}</Card.Header>
      <Card.Body>
        <img src={user.avatarURL} className='avatar large' alt='' />
        <p>Answered {Object.keys(user.answers).length} Questions</p>
        <p>Asked {user.questions.length} Questions</p>
        <p>Score: {user.score}</p>
      </Card.Body>
    </Card>
  )
}
