export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const CATCH_TOKEN = 'CATCH_TOKEN';

export const loginAction = (payload) => ({
  type: LOGIN_SUCCEEDED,
  payload,
});

export const getToken = (payload) => ({
  type: CATCH_TOKEN,
  payload,
});
