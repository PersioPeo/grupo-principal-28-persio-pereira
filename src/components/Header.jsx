import React from 'react';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';
import Container from '../Pages/cssPages/Header';

class Header extends React.Component {
  render() {
    const { gravatarImg, name, score } = this.props;
    return (
      <Container>
        <img
          src={ gravatarImg }
          alt={ name }
          data-testid="header-profile-picture"
        />
        <div>
          <p data-testid="header-player-name">
            {' '}
            {name}
          </p>
          <p data-testid="header-score">
            Pontos:
            {' '}
            { score }
          </p>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  gravatarImg: player.gravatarImg,
  name: player.name,
  score: player.score,
  ranking: player.ranking,
});

Header.propTypes = {
  gravatarImg: string,
  name: string,
  score: number,
}.isRequired;

export default connect(mapStateToProps)(Header);
