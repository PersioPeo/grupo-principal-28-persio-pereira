import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shuffle from '../../services/shuffle';
import { loginAction, stopActionTime } from '../../actions';

const DIFFICULT_POINTS = { hard: 3, medium: 2, easy: 1 };

class Alternatives extends Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(stopActionTime());
    this.handleScore();
  }

  handleScore = () => {
    const scoreBase = 10;
    const { dispatch, timer, dificuldade } = this.props;
    const scoreTotal = { score: scoreBase + (timer * DIFFICULT_POINTS[dificuldade]) };
    dispatch(loginAction(scoreTotal));
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const alternatives = [correctAnswer, ...incorrectAnswers];

    return (
      <div data-testid="answer-options">
        {shuffle(alternatives)
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

export default connect()(Alternatives);
