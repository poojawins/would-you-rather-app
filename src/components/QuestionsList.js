import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionsList extends Component {
  render() {
    const { activeTab, questions } = this.props

    let filteredQuestions = questions && Object.values(questions)

    return (
      <div className='question-list'>
        {Object.values(filteredQuestions).map((question) =>
          <QuestionPreview key={question.id} question={question} activeTab={activeTab} />)
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser,
    currentUser: users[authedUser],
    questions,
    users
  }
}

export default connect(mapStateToProps)(QuestionsList)
