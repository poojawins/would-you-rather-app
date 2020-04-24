import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { handleAddQuestionAnswer } from '../actions/questions'

class Question extends Component {
  state = {
    selectedAnswer: '',
    toResult: false,
    toHome: false
  }

  handleSelect = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(handleAddQuestionAnswer({
      answer: this.state.selectedAnswer,
      qid: this.props.match.params.question_id
    }))

    this.setState({
      selectedAnswer: '',
      toResult: true
    })
  }

  render() {
    const { authedUser, match, questions, users } = this.props
    const questionID = match.params.question_id
    const question = questions && questions[questionID]
    const author = question && users[question.author]

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    if (this.state.toResult === true) {
      return <Redirect to={`/questions/${questionID}`} />
    }

    return (
      <Card className='question'>
        <Card.Header>{author && author.name} asks:</Card.Header>
        <Card.Body>
          <Form className='question-answer-form' onSubmit={this.handleSubmit}>
            <img className='avatar large' src={author && author.avatarURL} alt='' />
            <h3>Would you rather</h3>
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
        </Card.Body>

      </Card>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(Question)
