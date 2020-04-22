import React from 'react'
import { connect } from 'react-redux'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Navigation from './Navigation'
import QuestionsList from './QuestionsList'

function Dashboard ({ authedUser, users, questions }) {
  return (
    <Container fluid className='dashboard'>
      <Navigation />
      <div className='centered'>
        <Tabs>
          <Tab eventKey='unanswered' title='Unanswered'></Tab>
          <Tab eventKey='answered' title='Answered'></Tab>
        </Tabs>
        <QuestionsList />
      </div>
    </Container>
  )
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions
  }
}

export default connect(mapStateToProps)(Dashboard)
