import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleChangeOptionOne = (e) => {
    this.setState({ optionOne: e.target.value })
  }

  handleChangeOptionTwo = (e) => {
    this.setState({ optionTwo: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { optionOne, optionTwo } = this.state
    dispatch(handleAddQuestion(optionOne, optionTwo))
    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    })
  }

  render () {
    const { optionOne, optionTwo, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Card className='new-question'>
        <Card.Header>Create a New Question</Card.Header>
        <Card.Body>
          <Form className='new-question-form' onSubmit={this.handleSubmit}>
            <h3>Would you rather...</h3>
            <div>
              <input
                id='option-one'
                type='text'
                name='optionOne'
                value={optionOne}
                placeholder='Enter option one...'
                onChange={this.handleChangeOptionOne}
                required
              />
            </div>
            <p>OR</p>
            <div>
              <input
                id='option-two'
                type='text'
                name='optionTwo'
                value={optionTwo}
                placeholder='Enter option two...'
                onChange={this.handleChangeOptionTwo}
                required
              />
            </div>
            <Button type='submit'>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default connect()(NewQuestion)
