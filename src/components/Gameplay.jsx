import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestions } from '../services/API';
import Answers from './GameplayComponents/Answers';

class Gameplay extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      timer: 30,
      isDisabled: false,
    };
  }

  componentDidMount() {
    const { token, fetchingQuestion } = this.props;
    const ONE_SECOND = 1000;

    fetchingQuestion(token);

    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(props, prevState) {
    this.stopTimer(prevState);
  }

  stopTimer = (prevState) => {
    const ZERO = 0;
    const { timer, isDisabled } = this.state;
    if (prevState.timer !== timer && timer === ZERO) {
      clearInterval(this.intervalId);
    }
    if (isDisabled) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { questions, loading } = this.props;
    const { questionIndex, timer } = this.state;
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
                question={ element.question }
                correctAnswer={ element.correct_answer }
                incorrectAnswers={ element.incorrect_answers }
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

const mapStateToProps = (payload) => ({
  token: payload.token,
  questions: payload.getQuestions.questions.results,
  loading: payload.getQuestions.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingQuestion: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameplay);
