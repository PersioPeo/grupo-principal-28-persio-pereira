import { combineReducers } from 'redux';
import player from './login';
import token from './token';

const rootReducer = combineReducers({ player, token });

export default rootReducer;
