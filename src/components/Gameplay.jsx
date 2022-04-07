import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../services/API';
import Answers from './GameplayComponents/Answers';

class Gameplay extends Component {
  constructor() {
    super();

    this.state = {
      questionIndex: 0,
    };
  }

  componentDidMount() {
    const { token, fetchingQuestion } = this.props;
    fetchingQuestion(token);
  }

  render() {
    const { questions, loading } = this.props;
    const { questionIndex } = this.state;
    return (
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
    );
  }
}

const mapStateToProps = (payload) => ({
  token: payload.token,
  questions: payload.getQuestions.questions.results,
  loading: payload.getQuestions.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingQuestion: (token) => dispatch(fetchQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gameplay);
