import React from 'react';
import Main from './components/main';
import Admin from './components/admin';
import '../src/global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="app">
      </div>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/admin' component={Admin}/>
      </Switch>
    </Router>
  )
}

export default App;
