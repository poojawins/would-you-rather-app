import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addAnswer ({ answer, qid }) {
  return {
    type: ADD_ANSWER,
    answerData: {
      answer,
      qid
    }
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}

export function handleAddQuestionAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({
      answer,
      authedUser,
      qid
    })
      .then(() => dispatch(addAnswer({ answer, authedUser, qid })))
  }
}
