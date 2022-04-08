import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shuffle from '../../services/shuffle';
import { scoreAction, stopActionTime } from '../../actions';

class Alternatives extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
    };
  }

  componentDidMount() {
    const THIRTY = 30000;
    setTimeout(() => this.setState({ isDisabled: true }), THIRTY);
  }

  handleClick = ({ target: { name } }) => {
    const { dispatch } = this.props;
    dispatch(stopActionTime());
    if (name === 'correct') {
      this.handleScore();
    }
  }

  handleScore = () => {
    const { dispatch, timer, difficulty } = this.props;
    const difficultyPoints = { hard: 3, medium: 2, easy: 1 };
    const scoreBase = 10;
    const scoreTotal = scoreBase + (timer * difficultyPoints[difficulty]);
    dispatch(scoreAction(scoreTotal));
  }

  render() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const { isDisabled } = this.state;
    const alternatives = [correctAnswer, ...incorrectAnswers];

    return (
      <div data-testid="answer-options">
        {shuffle(alternatives)
          .map((element) => (
            <button
              onClick={ this.handleClick }
              key={ element }
              type="button"
              name={ element === correctAnswer
                ? 'correct'
                : 'wrong' }
              disabled={ isDisabled }
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

const mapStateToProps = ({ timer }) => ({
  timer: timer.currentTime,
});

export default connect(mapStateToProps)(Alternatives);
