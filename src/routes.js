import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import auth from './services/auth'; 

import Main from './pages/main';
import Painel from './pages/painel';
import Cadastro from './pages/cadastro/index';
import Login from './pages/login';
import RedefinirSenha from './pages/redefinirSenha';
import CodigoSenha from './pages/codigoSenha';

auth.check_auth();

const PrivateRoute = ({ component: Component, ... rest}) => ( // Cria uma rota privada
    <Route //Essa rota é uma rota normal, que renderiza um componente a ser informado dps...
        {... rest}
        render={props =>
            auth.user ? ( //... a diferença é que, se auth.authenticated for verdadeiro, ou seja, se tiver um use logado nos cookis, ...

                <Component {... props} /> // ... ele renderiza normal
            ) : ( // Se não, volta para a pagina inicial
                <Redirect to={{ pathname: "/", state: { from: props.location }}} />
            )
        }
    />
);

const LoginRoute = ({ component: Component, ... rest}) => (
    <Route 
        {... rest}
        render={props =>
            auth.user ? ( 

                <Redirect to={{ pathname: "/painel", state: { from: props.location }}} />
            ) : (

                <Component {... props} />
            )
        }
    />
);




export default function Routes() {
    return (

        <Router>
            <Route path="/" exact component={Main} />
            <PrivateRoute path="/painel" component={Painel} />
            <Route path='/cadastro' component={Cadastro} />
            <LoginRoute path='/login' component={Login} />
            <Route path='/redefinir/senha' component={RedefinirSenha} />
            <Route path='/codigo/senha/:token' component={CodigoSenha} />
        </Router>

    )
}
