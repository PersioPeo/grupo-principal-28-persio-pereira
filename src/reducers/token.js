import { CATCH_TOKEN } from '../actions';

const INITIAL_STATE = '';

function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CATCH_TOKEN:
    return action.payload;
  default:
    return state;
  }
}

export default token;
