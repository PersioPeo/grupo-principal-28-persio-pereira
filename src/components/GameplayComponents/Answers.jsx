import React, { Component } from 'react';
import Alternatives from './Alternatives';

class Answers extends Component {
  render() {
    const { category, question, correctAnswer, incorrectAnswers } = this.props;
    return (
      <>
        <p data-testid="question-category">{category}</p>
        <p data-testid="question-text">{question}</p>
        <Alternatives
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
        />
      </>
    );
  }
}

export default Answers;
