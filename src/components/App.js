import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Navigation from './Navigation'
import NewQuestion from './NewQuestion'
import PageNotFound from './PageNotFound'
import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Container fluid className='app container'>
          {!authedUser
            ? <Login />
            : <Fragment>
                <Navigation />
                <div className='centered-content'>
                  <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:question_id' component={Question} />
                    <Route path='*' component={PageNotFound} />
                  </Switch>
                </div>
              </Fragment>
          }
        </Container>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
