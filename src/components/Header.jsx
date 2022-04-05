import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <img
          src="gravatarurl"
          alt="imagem de perfil"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name"> nome do jogador</p>
        <p data-testid="header-score"> placar </p>
      </div>
    );
  }
}

export default Header;
