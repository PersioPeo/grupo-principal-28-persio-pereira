import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from '../../services/shuffle';

class Alternatives extends Component {
  componentDidMount() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const alternatives = [correctAnswer, ...incorrectAnswers];
    shuffle(alternatives);
  }

handleClick = () => {

}

render() {
  const { correctAnswer, incorrectAnswers } = this.props;
  const alternatives = [correctAnswer, ...incorrectAnswers];

  return (
    <div data-testid="answer-options">
      {alternatives
        .map((element) => (
          <button
            onClick={ this.handleClick }
            key={ element }
            type="button"
            data-testid={
              element === correctAnswer
                ? 'correct-answer'
                : `wrong-answer-${incorrectAnswers.indexOf(element)}`
            }
          >
            { element }
          </button>
        ))}
    </div>
  );
}
}

Alternatives.propTypes = {
  incorrectAnswers: PropTypes.object,
  correctAnswer: PropTypes.string,
}.isRequired;

export default Alternatives;
