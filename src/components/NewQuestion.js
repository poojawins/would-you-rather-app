import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
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
    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
    this.setState({
      optionOne: '',
      optionTwo: ''
    })
    // need to redirect to '/'
  }

  render () {
    return (
      <div className='new-question container'>
        <h2>Create a New Question</h2>
        <Form className='new-question-form'>
          <h3>Would you rather...</h3>
          <div>
            <input
              id='option-one'
              type='text'
              value={this.state.optionOne}
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
              value={this.state.optionTwo}
              placeholder='Enter option two...'
              onChange={this.handleChangeOptionTwo}
              required
            />
          </div>
          <Button onSubmit={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default NewQuestion
