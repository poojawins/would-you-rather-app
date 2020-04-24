import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_ANSWER :
      return {
        ...state,
        [action.answerData.qid]: {
          ...state[action.answerData.qid],
          [action.answerData.answer] : {
            ...state[action.answerData.qid][action.answerData.answer],
            votes: state[action.answerData.qid][action.answerData.answer].votes.concat([action.answerData.authedUser])
          }
        }
      }
    default :
      return state
  }
}
