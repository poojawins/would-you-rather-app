import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function PageNotFound () {
  return (
    <div>
      <h2>404 ERROR</h2>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </p>
      <Link to='/'><Button>Back to our site</Button></Link>
    </div>
  )
}
