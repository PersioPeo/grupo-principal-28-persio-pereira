import { LOGIN_SUCCEEDED } from '../actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_SUCCEEDED:
    return {
      ...action.payload,
    };
  default:
    return state;
  }
}

export default player;
