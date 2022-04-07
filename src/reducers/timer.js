import { TIMER_ACTION } from '../actions';

const INITIAL_STATE = {
  stop: false,
  currentTime: '',
};

const saveTimer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case STOP_ACTION: return !state.stop;
  case TIMER_ACTION: return action.payload;
  default: return state;
  }
};

export default saveTimer;
