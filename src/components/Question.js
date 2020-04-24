import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-bootstrap'

class Question extends Component {
  render() {
    const { match, questions, users } = this.props
    const questionID = match.params.question_id
    const question = questions && questions[questionID]
    const author = question && users[question.author]

    return (
      <Card className='question'>
        <Card.Header>{author && author.name} asks:</Card.Header>
        <Card.Body>
          <img className='avatar large' src={author && author.avatarURL} alt='' />
          <h3>Would you rather</h3>
          <p>{question && question.optionOne.text}</p>
          <p>OR</p>
          <p>{question && question.optionTwo.text}</p>
        </Card.Body>
        <Button>Submit</Button>
      </Card>
    )
  }
}

function mapStateToProps ({ questions, users }) {
  return {
    questions,
    users
  }
}

export default connect(mapStateToProps)(Question)
