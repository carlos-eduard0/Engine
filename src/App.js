import React from 'react';
import Main from './Screens/main';
import Painel from './Screens/painel';
import AOS from 'aos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import '../src/global.css';
import Cadastro from './Screens/cadastro';


class App extends React.Component {
  componentDidMount(){
    AOS.init()
  }
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path ='/painel' component={Painel}/>
        </Switch>
      </Router>
    )
  }
};

export default App;
