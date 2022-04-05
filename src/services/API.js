const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';
const QUESTIONS_ENDPOINT = 'https://opentdb.com/api.php?amount=5&token=';
const AUTHENTICATION_ENDPOINT = 'https://www.gravatar.com/avatar/';

export const fetchToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchQuestions = async (token) => {
  try {
    const response = await fetch(`${QUESTIONS_ENDPOINT}${token}`);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchGravatar = async (hash) => {
  try {
    const response = await fetch(`${AUTHENTICATION_ENDPOINT}${hash}`);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};
