export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const CATCH_TOKEN_SUCCEEDED = 'CATCH_TOKEN_SUCCEEDED';
export const ERROR = 'ERROR';
export const GET_QUESTIONS_SUCCEDED = 'GET_QUESTIONS_SUCCEDED';
export const GET_QUESTIONS_FAILED = 'GET_QUESTIONS_FAILED';
export const LOADING = 'LOADING';

export const loginAction = (payload) => ({
  type: LOGIN_SUCCEEDED,
  payload,
});

export const getToken = (payload) => ({
  type: CATCH_TOKEN_SUCCEEDED,
  payload,
});

export const errorAction = (payload) => ({
  type: ERROR,
  payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS_SUCCEDED,
  payload,
});

export const getQuestionsFail = (payload) => ({
  type: GET_QUESTIONS_FAILED,
  payload,
});

export const loading = () => ({
  type: LOADING,
});
