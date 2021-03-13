import './App.css';
import React from 'react';
import HomePage from './HomePage';
import ParrotPopularity from './ParrotPopularity';
import BudgieEggs from './/BudgieEggsCard/BudgieEggs';
import {  Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/parrot-budgie" component={HomePage} />
        <Route path="/parrot-budgie-0" component={HomePage} />
        <Route path="/parrot-budgie-1" component={HomePage} />
        <Route path="/parrot-popularity" component={ParrotPopularity} exact />
        <Route path="/budgie-eggs" component={BudgieEggs} exact />
      </Switch>
    </main>
  );
}

export default App;
