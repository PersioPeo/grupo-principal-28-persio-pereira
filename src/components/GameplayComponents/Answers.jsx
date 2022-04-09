import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alternatives from './Alternatives';
import Timer from './Timer';

class Answers extends Component {
  render() {
    const {
      history,
      category,
      question,
      correctAnswer,
      incorrectAnswers,
      difficulty } = this.props;

    return (
      <>
        <Timer />
        <p data-testid="question-category">{category}</p>
        <p data-testid="question-text">{question}</p>
        <Alternatives
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
          history={ history }
          difficulty={ difficulty }
        />
      </>
    );
  }
}

Answers.propTypes = {
  incorrectAnswers: PropTypes.object,
  correctAnswer: PropTypes.string,
  question: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Answers;
