import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { questionIndex } from '../actions';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.setState({ ranking: JSON.parse(localStorage.getItem('ranking')) });
  }

  render() {
    const { ranking } = this.state;
    return (
      <div data-testid="ranking-title">
        <section>
          {
            ranking.sort((a, b) => a.score - b.score).reverse().map((player, index) => (

              <div key={ player.name + index }>

                <img
                  src={ player.picture }
                  alt={ player.name }
                />
                <span
                  key={ player.name }
                  data-testid={ `player-name-${index}` }
                >
                  {player.name}
                </span>
                <span data-testid={ `player-score-${index}` }>
                  {player.score}
                </span>

              </div>
            ))
          }
        </section>
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
      </div>
    );
  }
}

Ranking.propTypes = {
  history: func,
  dispatch: func,
}.isDisabled;

const mapStateToProps = ({ player }) => ({
  player,
});

export default connect(mapStateToProps)(Ranking);
