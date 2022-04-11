import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import Header from '../components/Header';
import { questionIndex, setRanking } from '../actions';
import * as S from './cssPages/Feedback';

class FeedBack extends Component {
  componentDidMount() {
    this.setLocalStorage();
  }

  setLocalStorage = () => {
    const { player: { gravatarImg, name, score }, dispatch, ranking } = this.props;
    dispatch(setRanking({ name, score, gravatarImg }));
    let rankingStorage = JSON.parse(localStorage.getItem('ranking'));
    if (rankingStorage) {
      rankingStorage.push(...ranking);
    } else {
      rankingStorage = ranking;
    }
    localStorage.setItem('ranking', JSON.stringify(rankingStorage));
  }

  render() {
    const { player: { score, assertions } } = this.props;
    const counterToMessage = 3;
    return (
      <>
        <Header />
        <S.Container>
          <h1>Feedback</h1>
          <span data-testid="feedback-text">
            {assertions < counterToMessage
              ? 'Could be better...' : 'Well Done!'}
          </span>
          <span data-testid="feedback-total-question">
            {(assertions === 1) ? `Você acertou ${assertions} questão!`
              : `Você acertou ${assertions} questões!`}
          </span>
          <span data-testid="feedback-total-score">
            { `E fez um total de ${score} pontos`}
          </span>
          <button
            onClick={ () => {
              const { history, dispatch } = this.props;
              dispatch(questionIndex(0));

              history.push('/');
            } }
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
          <button
            onClick={ () => {
              const { history } = this.props;
              history.push('/ranking');
            } }
            type="button"
            data-testid="btn-ranking"
          >
            Ranking
          </button>

        </S.Container>
      </>
    );
  }
}

FeedBack.propTypes = {
  player: object,
}.isRequired;

const mapStateToProps = ({ player, ranking }) => ({
  player,
  ranking,
});

export default connect(mapStateToProps)(FeedBack);
