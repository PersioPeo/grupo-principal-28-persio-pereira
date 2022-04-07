import React, { Component } from 'react';
import Header from '../components/Header';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
      isDisabled: false,
      // disable: false,
    };
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, ONE_SECOND);
  }

  componentDidUpdate(props, prevState) {
    this.handleTimer(prevState);
  }

handleTimer = (prevState) => {
  const ZERO = 0;
  const { timer, isDisabled } = this.state;
  if (prevState.timer !== timer && timer === ZERO) {
    clearInterval(this.intervalId);
    // this.setState(() => ({ disable: true }));
  }
  if (isDisabled) {
    clearInterval(this.intervalId);
  }
}

render() {
  const { timer } = this.state;
  return (
    <>
      <Header />
      <p>{timer}</p>
      <button
        type="button"
        onClick={ () => this.setState({ isDisabled: true }) }
      >
        OK

      </button>
    </>
  );
}
}
