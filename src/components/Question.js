import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { handleAddQuestionAnswer } from '../actions/questions'

class Question extends Component {
  state = {
    selectedAnswer: '',
    toResult: false
  }

  handleSelect = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleAddQuestionAnswer(this.props.match.params.question_id, this.state.selectedAnswer))

    this.setState({
      selectedAnswer: '',
      toResult: true
    })
  }

  renderForm(question) {
    return (
      <Form className='question-answer-form' onSubmit={this.handleSubmit}>
        <div key='default-radio' className='radio-inputs'>
          <Form.Check
            type='radio'
            id='optionOne'
            name="formHorizontalRadios"
            value='optionOne'
            onChange={this.handleSelect}
            label={question && question.optionOne.text}
          />
          <Form.Check
            type='radio'
            id='optionTwo'
            name="formHorizontalRadios"
            value='optionTwo'
            onChange={this.handleSelect}
            label={question && question.optionTwo.text}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

  renderResult(question) {
    return (
      <div>Result is here</div>
    )
  }

  render() {
    const { currentUser, match, questions, users } = this.props
    const questionID = match.params.question_id
    const question = questions && questions[questionID]
    const author = question && users[question.author]
    const currentUserAnsweredQuestions = currentUser && Object.keys(currentUser.answers)
    const currentUserAnsweredCurrentQuestion = currentUserAnsweredQuestions && currentUserAnsweredQuestions.includes(questionID)

    if (this.state.toResult === true) {
      return <Redirect to={`/questions/${questionID}`} />
    }

    const body = currentUserAnsweredCurrentQuestion ? this.renderResult(question) : this.renderForm(question)

    return (
      <Card className='question'>
        <Card.Header>{author && author.name} asks:</Card.Header>
        <Card.Body>
          <img className='avatar large' src={author && author.avatarURL} alt='' />
          <h3>Would you rather</h3>
          {body}
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    currentUser: users[authedUser],
    questions,
    users
  }
}

export default connect(mapStateToProps)(Question)
