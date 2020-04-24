import React, { Component } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import QuestionsList from './QuestionsList'

class Dashboard extends Component {
  state = {
    key: 'unanswered'
  }

  setKey (key) {
    this.setState({ key: key })
  }

  render() {
    return (
      <Container fluid className='dashboard'>
        <Tabs activeKey={this.state.key} onSelect={(k) =>this.setKey(k)}>
          <Tab eventKey='unanswered' title='Unanswered'></Tab>
          <Tab eventKey='answered' title='Answered'></Tab>
        </Tabs>
        <QuestionsList activeTab={this.state.key} />
      </Container>
    )
  }
}

export default Dashboard
