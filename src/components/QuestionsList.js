import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class QuestionsList extends Component {
  render() {
    const { activeTab, currentUser, questions } = this.props
    const authedUserAnsweredQuestions = currentUser && Object.keys(currentUser.answers)
    let filteredQuestions = questions

    if (activeTab && activeTab === 'answered') {
      filteredQuestions = questions && Object.values(questions).filter((question) => authedUserAnsweredQuestions.includes(question.id))
    }

    if (activeTab && activeTab === 'unanswered') {
      filteredQuestions = questions && Object.values(questions).filter((question) => !authedUserAnsweredQuestions.includes(question.id))
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
