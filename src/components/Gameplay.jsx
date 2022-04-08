import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../services/API';
import Answers from './GameplayComponents/Answers';
import { timerAction } from '../actions';

class Gameplay extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    const { token, fetchingQuestion } = this.props;
    fetchingQuestion(token);
    this.startTimer();
  }

  componentDidUpdate(props, prevState) {
    this.stopTimer(prevState);
  }

  stopTimer = (prevState) => {
    const { currentTime, stop } = this.props;
    const ZERO = 0;
    const { timer } = this.state;
    if (prevState.timer !== timer && timer === ZERO) {
      clearInterval(this.intervalId);
    }
    if (stop) {
      clearInterval(this.intervalId);
      currentTime(timer);
    }
  }

  startTimer() {
    const ONE_SECOND = 1000;

    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, ONE_SECOND);
  }

  render() {
    const { questions, loading, questionIndex, history } = this.props;
    const { timer } = this.state;
    return (
      <>
        <p>{timer}</p>
        <div>
          { loading ? 'Carregando...'
            : questions
              .filter((_, index) => index === questionIndex)
              .map((element) => (<Answers
                key={ element.question }
                category={ element.category }
                difficulty={ element.difficulty }
                question={ element.question }
                correctAnswer={ element.correct_answer }
                incorrectAnswers={ element.incorrect_answers }
                history={ history }
              />))}
        </div>

      </>
    );
  }
}

Gameplay.propTypes = {
  token: PropTypes.string,
  question: PropTypes.object,
  loading: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.getQuestions.questions.results,
  loading: state.getQuestions.loading,
  stop: state.timer.stop,
  questionIndex: state.questionId.index,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingQuestion: (token) => dispatch(fetchQuestions(token)),
  currentTime: (timer) => dispatch(timerAction(timer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameplay);
