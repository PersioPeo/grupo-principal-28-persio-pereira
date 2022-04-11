import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import Header from '../components/Header';
import { questionIndex, setRanking } from '../actions';

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
    const { player } = this.props;
    const counterToMessage = 3;
    return (
      <>
        <Header />
        <div>
          <span>Feedback</span>
          <span data-testid="feedback-text">
            {player.assertions < counterToMessage
              ? 'Could be better...' : 'Well Done!'}
          </span>
          <span data-testid="feedback-total-score">{player.score}</span>
          <span data-testid="feedback-total-question">{player.assertions}</span>
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

        </div>
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
