import React, { Component } from 'react';
import Header from '../components/Header';
import Gameplay from '../components/Gameplay';

export default class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <Gameplay />
        <footer />
      </>
    );
  }
}
