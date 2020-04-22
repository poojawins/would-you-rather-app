import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation ({ authedUser }) {
  return (
    <Navbar className='navigation' bg='dark' variant='dark'>
      <Navbar.Brand>Would You Rather</Navbar.Brand>
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        <Nav.Link href='/add'>New Question</Nav.Link>
        <Nav.Link href='/leaderboard'>Leaderboard</Nav.Link>
      </Nav>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Signed in as: {authedUser}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navigation)
