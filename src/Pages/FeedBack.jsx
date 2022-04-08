import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import Header from '../components/Header';

class FeedBack extends Component {
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
              const { history } = this.props;
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

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(FeedBack);
