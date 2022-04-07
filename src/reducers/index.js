import { combineReducers } from 'redux';
import player from './login';
import token from './token';
import getQuestions from './getQuestions';

const rootReducer = combineReducers({ player, token, getQuestions });

export default rootReducer;
