import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Main from './pages/main';
import Painel from './pages/painel';
import Cadastro from './pages/cadastro/index'



export default function Routes(){
    return(
  
        <Router>
           
                <Route path="/" exact component={Main}/>
                <Route path="/painel" exact component={Painel}/>
                <Route path='/cadastro' exact component={Cadastro}/>
          
        </Router>
 
    )
}
