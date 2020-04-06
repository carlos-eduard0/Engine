import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../src/global.css';
import Routes from './routes';



class App extends React.Component {
  componentDidMount(){
    AOS.init()
  }
  render(){
    return(
  
     <Routes/>
    )
  }
};

export default App;
