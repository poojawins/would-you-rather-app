import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { clearAuthedUser } from '../actions/authedUser'

function Navigation ({ currentUser, dispatch }) {
  return (
    <Navbar className='navigation' bg='dark' variant='dark'>
      <Navbar.Brand>Would You Rather</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
        <Nav.Link as={NavLink} to='/add'>New Question</Nav.Link>
        <Nav.Link as={NavLink} to='/leaderboard'>Leaderboard</Nav.Link>
      </Nav>
      <Navbar.Collapse className='justify-content-end'>
        <img className='avatar small' src={currentUser && currentUser.avatarURL} alt='' />
        <Navbar.Text>
          Signed in as: {currentUser && currentUser.name}
        </Navbar.Text>
        <Nav.Link onClick={(e) => dispatch(clearAuthedUser())}>Logout</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

function mapStateToProps ({ authedUser, users }) {
  return {
    currentUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(Navigation)
