import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function QuestionPreview ({ question }) {
  return (
    <Card className='question-preview'>
      <Card.Header>{question.author} asks:</Card.Header>
      <Card.Body>
        <h3>Would you rather</h3>
        <p>{question.optionOne.text} or...</p>
      </Card.Body>
      <Button href={`/questions/${question.id}`}>Answer</Button>
    </Card>
  )
}
