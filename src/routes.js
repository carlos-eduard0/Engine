import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import auth from './services/auth'; 
import Cookies from 'universal-cookie'; 

import Main from './pages/main';
import Painel from './pages/painel';
import Cadastro from './pages/cadastro/index';
import Login from './pages/login';
import RedefinirSenha from './pages/redefinirSenha';
import CodigoSenha from './pages/codigoSenha';


export default function Routes() {

    const cookies = new Cookies();

    const [auth, setAuth] = useState(false);

    const check = () => {
        const user = cookies.get('id');

        if(user){
            setAuth(true);
        } else {
            setAuth(false);
        }
    }

    const PrivateRoute = ({ component: Component, ... rest}) => ( 
        <Route 
            {... rest}
            render={props =>
                auth ? ( 

                    <Component {... props} /> 
                ) : ( 
                    <Redirect to={{ pathname: "/", state: { from: props.location }}} />
                )
            }
        />
    );
    
    useEffect(() => {
        check();
    }, []);

    return (

        <Router>
            <Route path="/" exact component={Main} />
            <PrivateRoute path="/painel" component={Painel} />
            <Route path='/cadastro' component={Cadastro} />
            <Route path='/login' component={Login} />
            <Route path='/redefinir/senha' component={RedefinirSenha} />
            <Route path='/codigo/senha/:token' component={CodigoSenha} />
        </Router>

    )
}
