import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      nameInput: '',
      buttonDisable: true,
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      const { emailInput, nameInput } = this.state;

      if (emailInput.length > 2 && nameInput.length > 2) {
        this.setState({
          buttonDisable: false,
        });
      } else {
        this.setState({
          buttonDisable: true,
        });
      }
    });
  }

  render() {
    const { emailInput, nameInput, buttonDisable } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email do Gravatar:
          <input
            type="text"
            id="email"
            data-testid="input-gravatar-email"
            name="emailInput"
            value={ emailInput }
            onChange={ this.changeHandler }
          />
        </label>

        <label htmlFor="senha">
          Nome:
          <input
            type="text"
            id="senha"
            data-testid="input-player-name"
            name="nameInput"
            value={ nameInput }
            onChange={ this.changeHandler }
          />
        </label>

        <Link to="/game">
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ buttonDisable }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Home;
