import React from 'react'
import { Card } from 'react-bootstrap'

export default function User (props) {
  const answersLength = Object.keys(props.user.answers).length
  const questionsLength = props.user.questions.length
  const score = answersLength + questionsLength
  return (
    <Card className='user'>
      <Card.Header>{props.user.name}</Card.Header>
      <Card.Body>
        <p>Answered {answersLength} Questions</p>
        <p>Asked {questionsLength} Questions</p>
        <p>Score: {score}</p>
      </Card.Body>
    </Card>
  )
}
