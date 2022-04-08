import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shuffle from '../../services/shuffle';
import { stopActionTime, questionIndex, scoreAction } from '../../actions';

const CORRECT = 'correct-answer';

class Alternatives extends Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
      nextQuestion: true,
      firstQuestion: true,
    };
  }

  componentDidMount() {
    const THIRTY = 30000;
    setTimeout(() => this.setState({ isDisabled: true }), THIRTY);
  }

  handleClick = (event) => {
    const { dispatch } = this.props;
    dispatch(stopActionTime());
    if (event.target.id === CORRECT) {
      this.handleScore();
      this.setState({
        isDisabled: true,
        nextQuestion: false,
        firstQuestion: false,
      });
    } else {
      this.setState({
        isDisabled: true,
        nextQuestion: false,
        firstQuestion: false,
      });
    }
  }

  handleIndex = () => {
    const { dispatch, questionNumber, history } = this.props;
    const MAX_QUESTIONS = 3;
    if (questionNumber > MAX_QUESTIONS) {
      history.push('/feedback');
    } else {
      dispatch(questionIndex(questionNumber + 1));
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
    const { isDisabled, nextQuestion, firstQuestion } = this.state;
    const alternatives = [correctAnswer, ...incorrectAnswers];

    return (
      <div data-testid="answer-options">
        {shuffle(alternatives)
          .map((element) => (
            <button
              onClick={ this.handleClick }
              key={ element }
              type="button"
              name={ element }
              disabled={ isDisabled }
              data-testid={
                element === correctAnswer
                  ? CORRECT
                  : `wrong-answer-${incorrectAnswers.indexOf(element)}`
              }
              id={
                element === correctAnswer
                  ? CORRECT
                  : `wrong-answer-${incorrectAnswers.indexOf(element)}`
              }
            >
              {element}
            </button>
          ))}

        <div>
          {!firstQuestion
            && (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ this.handleIndex }
                disabled={ nextQuestion }
              >
                Próxima

              </button>
            )}
        </div>
      </div>
    );
  }
}

Alternatives.propTypes = {
  incorrectAnswers: PropTypes.object,
  correctAnswer: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  questionNumber: state.questionId.index,
  timer: state.timer.currentTime,
});

export default connect(mapStateToProps)(Alternatives);
