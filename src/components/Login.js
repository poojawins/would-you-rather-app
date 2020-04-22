import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    userID: ''
  }

  handleChange = (e) => {
    this.setState({ userID: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.userID))
  }

  render() {
    const { users } = this.props

    return (
      <div className='login center'>
        <div className='login-header'>
          <h2>Welcome to Would You Rather</h2>
          <p>Please sign in to continue</p>
        </div>
        <Form className='login-form' onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <select id='users-dropdown' value={this.state.userID} onChange={this.handleChange}>
            <option value='' disabled>Select a user</option>
            {Object.values(users).map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
          <Button type='submit' block>Login</Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
