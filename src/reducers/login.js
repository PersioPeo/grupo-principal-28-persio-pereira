import { LOGIN_SUCCEEDED } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  gravatarImg: '',
  score: 0,
  assertions: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCCEEDED:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default player;
