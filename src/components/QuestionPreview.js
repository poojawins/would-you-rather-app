import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-bootstrap'

class QuestionPreview extends Component {
  render() {
    const { activeTab, question, users } = this.props
    const buttonText = activeTab === 'answered' ? "Result" : "Answer"
    const author = question && users[question.author]
    return (
      <Card className='question-preview'>
        <Card.Header>{author && author.name} asks:</Card.Header>
        <Card.Body>
          <img className='avatar large' src={author && author.avatarURL} alt='' />
          <h3>Would you rather</h3>
          <p>{question.optionOne.text} or...</p>
        </Card.Body>
        <Button href={`/questions/${question.id}`}>{buttonText}</Button>
      </Card>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(QuestionPreview)
