import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { handleAddQuestionAnswer } from '../actions/questions'
import PageNotFound from './PageNotFound'

class Question extends Component {
  state = {
    selectedAnswer: ''
  }

  handleSelect = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    if (this.state.selectedAnswer !== '') {
      dispatch(handleAddQuestionAnswer(this.props.match.params.question_id, this.state.selectedAnswer))
      this.setState({
        selectedAnswer: ''
      })
    }
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
    const optionOneVotes = question && question.optionOne.votes.length
    const optionTwoVotes = question && question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const answer = this.props.currentUser.answers[question.id]

    return (
      <div className='question-result'>
        <div className='result-row'>
          <div hidden={answer !== 'optionOne'}>Your Vote</div>
          <div>{question && question.optionOne.text}</div>
          <div>Votes: {optionOneVotes} out of {totalVotes}</div>
          <div>{(optionOneVotes/totalVotes) * 100} Percent</div>
        </div>
        <div className='result-row'>
          <div hidden={answer !== 'OptionTwo'}>Your Vote</div>
          <div>{question && question.optionTwo.text}</div>
          <div>Votes: {optionTwoVotes} out of {totalVotes}</div>
          <div>{(optionTwoVotes/totalVotes) * 100} Percent</div>
        </div>
        <div>
          <Link to='/'><Button>Back</Button></Link>
        </div>
      </div>
    )
  }

  render() {
    const { currentUser, match, questions, users } = this.props
    const questionID = match.params.question_id
    const question = questions && questions[questionID]

    if (typeof question === 'undefined') {
      return <PageNotFound to='/' />
    }

    const author = question && users[question.author]
    const currentUserAnsweredQuestions = currentUser && Object.keys(currentUser.answers)
    const currentUserAnsweredCurrentQuestion = currentUserAnsweredQuestions && currentUserAnsweredQuestions.includes(questionID)
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
