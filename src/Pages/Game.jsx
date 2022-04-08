import React, { Component } from 'react';
import Header from '../components/Header';
import Gameplay from '../components/Gameplay';
import { func } from 'prop-types';

export default class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />

        <Gameplay history={ history } />

        <footer />

      </>
    );
  }
}
