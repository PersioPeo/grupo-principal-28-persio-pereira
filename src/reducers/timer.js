import { TIMER_ACTION, STOP_ACTION } from '../actions';

const INITIAL_STATE = {
  stop: false,
  currentTime: '',
};

const timer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STOP_ACTION: return {
    ...state,
    stop: !state.stop,
  };
  case TIMER_ACTION: return {
    ...state,
    currentTime: action.payload,
  };
  default: return state;
  }
};

export default timer;
