import React from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

function QuestionsList ({ users, questions }) {
  return (
    <div className='question-list'>
      {Object.values(questions).map((question) =>
        <QuestionPreview key={question.id} question={question} />)
      }
    </div>
  )
}

function mapStateToProps ({ users, questions }) {
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(QuestionsList)
