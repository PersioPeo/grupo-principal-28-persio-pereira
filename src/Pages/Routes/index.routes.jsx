import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Home';
import Game from '../Game';
import Feedback from '../FeedBack';
import Config from '../Config';
import NotFound from '../NotFound';
import Ranking from '../Ranking';

export default class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/config" component={ Config } />
        <Route path="*" component={ NotFound } />
      </Switch>

    );
  }
}
