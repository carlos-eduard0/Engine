import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 

import Main from './pages/main';
import Painel from './pages/painel';
import Cadastro from './pages/cadastro/index';
import Login from './pages/login';
import RedefinirSenha from './pages/redefinirSenha';
import CodigoSenha from './pages/codigoSenha';

export default function Routes() {
    
    return (

        <Router>
            <Route path="/" exact component={Main} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/login' component={Login} />
            <Route path='/redefinir/senha' component={RedefinirSenha} />
            <Route path='/codigo/senha/:token' component={CodigoSenha} />
        </Router>

    )
}