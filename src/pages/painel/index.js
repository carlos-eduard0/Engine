import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from '../../services/api';

import Dashboard from '../dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logoBranca from '../../img/logo-branca.png';
import Service from '../serviços';
import Star from   '../avaliações';
import './main.css'
function Painel() {
    const cookies = new Cookies();
    const history = useHistory();

    async function handleUserLogout(){
        cookies.remove('id', {path:'/'});
        history.push('/');    
    }

    return (
        <Router>
            <div className="body-painel">
                <div className="main-painel">
                    <div className="logo-painel">
                        <img src={logoBranca} alt="" />
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><NavLink to={'/painel/dash'}><DashboardIcon className="icon dash"></DashboardIcon>Dashboard</NavLink></li>
                            <li><NavLink to={'/painel/service'}><SettingsIcon className="icon serv"></SettingsIcon>Meus Serviços</NavLink></li>
                            <li><NavLink to={'/painel/star'}><StarIcon className="icon star"></StarIcon>Avaliações</NavLink></li>
                            <li id='logout' onClick={handleUserLogout}><ExitToAppIcon className="icon logout"></ExitToAppIcon>Logout</li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/painel/dash' component={Dashboard} />
                    <Route path='/painel/service' component={Service} />
                    <Route path='/painel/star' component={Star} />
                </Switch>
            </div>
        </Router>
    )
}
export default Painel;