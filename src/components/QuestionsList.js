import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionsList extends Component {
  render() {
    const { activeTab, currentUser, questions } = this.props
    const authedUserAnsweredQuestions = currentUser && Object.keys(currentUser.answers)
    let filteredQuestions = questions

    if (activeTab && activeTab === 'answered') {
      filteredQuestions = filteredQuestions && Object.values(filteredQuestions).filter((question) => authedUserAnsweredQuestions.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp)
    }

    if (activeTab && activeTab === 'unanswered') {
      filteredQuestions = filteredQuestions && Object.values(filteredQuestions).filter((question) => !authedUserAnsweredQuestions.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp)
    }

    return (
      <div className='question-list'>
        {filteredQuestions && Object.values(filteredQuestions).map((question) =>
          <QuestionPreview key={question.id} question={question} activeTab={activeTab} />)
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    currentUser: users[authedUser],
    questions
  }
}

export default connect(mapStateToProps)(QuestionsList)
