import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState = ({ [name]: value });
  }

  render() {
    const { name, email } = this.state;
    return (
      <form>
        <label htmlFor="name">
          <input
            value={ name }
            type="text"
            name="name"
          />
        </label>
        <label htmlFor="name">
          <input
            value={ email }
            type="text"
            name="email"
          />
        </label>
        <button
          onClick=""
          type="submit"
        >
          Play
        </button>
      </form>
    );
  }
}
