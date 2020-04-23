import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { clearAuthedUser } from '../actions/authedUser'

function Navigation ({ authedUser, dispatch }) {
  return (
    <Navbar className='navigation' bg='dark' variant='dark'>
      <Navbar.Brand>Would You Rather</Navbar.Brand>
      <Nav>
        <NavLink component={Nav.Link} to='/' exact>Home</NavLink>
        <NavLink component={Nav.Link} to='/add'>New Question</NavLink>
        <NavLink component={Nav.Link} to='/leaderboard'>Leaderboard</NavLink>
      </Nav>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>
          Signed in as: {authedUser}
        </Navbar.Text>
        <Nav.Link onClick={(e) => dispatch(clearAuthedUser())}>Logout</Nav.Link>
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
