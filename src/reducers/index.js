import { combineReducers } from 'redux';
import player from './login';
import token from './token';
import getQuestions from './getQuestions';
import timer from './timer';

const rootReducer = combineReducers({ player, token, getQuestions, timer });

export default rootReducer;
