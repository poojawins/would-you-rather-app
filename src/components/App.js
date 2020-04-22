import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Container fluid className='app container'>
        {!authedUser ? <Login /> : <Dashboard />}
      </Container>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
