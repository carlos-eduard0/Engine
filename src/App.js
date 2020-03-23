import React from 'react';
import Main from './components/main';
import '../src/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="app">
      </div>
      <Switch>
        <Route exact path='/' component={Main}/>
      </Switch>
    </Router>
  )
}

export default App;
