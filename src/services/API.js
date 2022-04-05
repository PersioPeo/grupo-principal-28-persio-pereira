const TOKEN_ENDPOINT = 'https://opentdb.com/api_token.php?command=request';

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
    const QUESTIONS_ENDPOINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(QUESTIONS_ENDPOINT);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};
