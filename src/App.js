import React from 'react';
import Main from './Screens/main';
import AOS from 'aos';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import '../src/global.css';
import Cadastro from './Screens/cadastro';


class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
     
    })
  }
  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/cadastro' component={Cadastro} />
        </Switch>
      </Router>
    )
  }
};

export default App;
