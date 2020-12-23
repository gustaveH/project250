import React, { Component } from 'react';
import './App.css';

import About from './pages/About/About';
import Dress from './pages/Culture/Dress';
import Ethnics from './pages/Culture/Ethinics';
import Music from './pages/Culture/Music';
import Error from './pages/Error/Error';
import Genocide from './pages/Genocide/Genocide';
import Home from './pages/Home/Home';
import Clans from './pages/Rwanda/Clans';
import Constitution from './pages/Rwanda/Constitution';
import Geo from './pages/Rwanda/Geography';
import History from './pages/Rwanda/History';
import Kingdoms from './pages/Rwanda/Kingdoms';
import Presidents from './pages/Rwanda/Presidents';
import Rwanda from './pages/Rwanda/Rwanda';
import Navigation from './pages/Navbar/Navigation';
import Culture from './pages/Culture/Culture';

import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dress' component={Dress} />
          <Route exact path='/ethnics' component={Ethnics} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/genocide' component={Genocide} />
          <Route exact path='/clans' component={Clans} />
          <Route exact path='/constitution' component={Constitution} />
          <Route exact path='/geography' component={Geo} />
          <Route exact path='/history' component={History} />
          <Route exact path='/kingdoms' component={Kingdoms} />
          <Route exact path='/presidents' component={Presidents} />
          <Route exact path='/rwanda' component={Rwanda} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
