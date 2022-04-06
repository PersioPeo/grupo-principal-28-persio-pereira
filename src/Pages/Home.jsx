import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../services/API';

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
    const { fetchingToken } = this.props;
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
            onClick={ () => fetchingToken() }
          >
            Entrar
          </button>
        </Link>

        <Link to="/config">
          <button
            type="submit"
            data-testid="btn-settings"
          >
            Configurações
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingToken: () => dispatch(fetchToken()),
});

Home.propTypes = {
  fetchingToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
