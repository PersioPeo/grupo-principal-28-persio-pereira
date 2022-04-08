import { combineReducers } from 'redux';
import player from './login';
import token from './token';
import getQuestions from './getQuestions';
import timer from './timer';
import questionId from './questionIndex';

const rootReducer = combineReducers({
  player,
  token,
  getQuestions,
  timer,
  questionId,
});

export default rootReducer;
