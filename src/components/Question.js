import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Question (props) {
  return (
    <Card className='question'>
      <Card.Header>{props.question.author} asks:</Card.Header>
      <Card.Body>
        <h3>Would you rather</h3>
        <p>{props.question.optionOne.text}</p>
        <p>OR</p>
        <p>{props.question.optionTwo.text}</p>
      </Card.Body>
      <Button>Answer</Button>
    </Card>
  )
}
