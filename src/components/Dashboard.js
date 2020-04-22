import React from 'react'

export default function Dashboard () {
  return (
    <div className='dashboard center'>
      Dashboard
      <div>
        <a href='/#' className='active'>Unanswered</a>
        <a href='/#' className=''>Answered</a>
      </div>
    </div>
  )
}
