import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { questionIndex } from '../actions';

class Ranking extends Component {
  render() {
    return (
      <div data-testid="ranking-title">
        <button
          onClick={ () => {
            const { history, dispatch } = this.props;
            dispatch(questionIndex(0));
            history.push('/');
          } }
          type="button"
          data-testid="btn-go-home"
        >
          Play Again
        </button>
        Ranking
      </div>
    );
  }
}

Ranking.propTypes = {
  history: func,
  dispatch: func,
}.isDisabled;

const mapStateToProps = ({ player }) => ({
  // [
  //   { name: nome - da - pessoa, score: 10, picture: url - da - foto - no - gravatar }
  // ]
  player,
});

export default connect(mapStateToProps)(Ranking);
