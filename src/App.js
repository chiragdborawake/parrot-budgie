import './App.css';
import React from 'react';
import HomePage from './HomePage';
import ParrotPopularity from './ParrotPopularity';
import {  Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/parrot-popularity" component={ParrotPopularity} exact />
      </Switch>
    </main>
  );
}

export default App;
