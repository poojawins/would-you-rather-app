import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function QuestionPreview (props) {
  return (
    <Card className='question-preview'>
      <Card.Header>{props.question.author} asks:</Card.Header>
      <Card.Body>
        <h3>Would you rather</h3>
        <p>{props.question.optionOne.text} or...</p>
      </Card.Body>
      <Button>Answer</Button>
    </Card>
  )
}
