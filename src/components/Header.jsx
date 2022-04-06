import React from 'react';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';

class Header extends React.Component {
  render() {
    const { gravatarImg, name, score } = this.props;
    return (
      <div>
        <img
          src={ gravatarImg }
          alt={ name }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          {' '}
          {name}
        </p>
        <p data-testid="header-score">
          {' '}
          {score }
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  gravatarImg: player.gravatarImg,
  name: player.name,
  score: player.score,

});

Header.propTypes = {
  gravatarImg: string,
  name: string,
  score: number,
}.isRequired;

export default connect(mapStateToProps)(Header);
