import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { fetchToken } from '../services/API';
import { loginAction } from '../actions';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      gravatarEmail: '',
      name: '',
      buttonDisable: true,
    };
  }

  changeHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateButton);
  }

  validateButton = () => {
    const { gravatarEmail, name } = this.state;
    const TWO = 2;
    const VALIDATION = gravatarEmail.length > TWO && name.length > TWO;

    this.setState((VALIDATION) ? { buttonDisable: false } : { buttonDisable: true });
  }

  clickHandler = (e) => {
    e.preventDefault();
    const { fetchingToken, loginInfo, history } = this.props;
    const { gravatarEmail, name } = this.state;
    const hash = md5(gravatarEmail).toString();
    const gravatarImg = `https://www.gravatar.com/avatar/${hash}`;

    fetchingToken();
    loginInfo({
      name,
      gravatarEmail,
      gravatarImg,
    });

    history.push('/game');
  }

  render() {
    const { gravatarEmail, name, buttonDisable } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email do Gravatar:
          <input
            type="text"
            id="email"
            data-testid="input-gravatar-email"
            name="gravatarEmail"
            value={ gravatarEmail }
            onChange={ this.changeHandler }
          />
        </label>

        <label htmlFor="senha">
          Nome:
          <input
            type="text"
            id="senha"
            data-testid="input-player-name"
            name="name"
            value={ name }
            onChange={ this.changeHandler }
          />
        </label>

        <button
          type="submit"
          data-testid="btn-play"
          disabled={ buttonDisable }
          onClick={ this.clickHandler }
        >
          Entrar
        </button>

        <Link to="/config">
          <button
            type="button"
            data-testid="btn-settings"
          >
            Configurações
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = {
  fetchingToken: fetchToken,
  loginInfo: loginAction,
};

Home.propTypes = {
  fetchingToken: func,
  history: func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Home);
