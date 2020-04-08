import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import logoBranca from '../../img/logo-branca.png';
import Service from '../serviços';
import Star from   '../avaliações';
import './main.css'
function Painel() {
    return (
        <Router>
            <div className="body-painel">
                <div className="main-painel">
                    <div className="logo-painel">
                        <img src={logoBranca} alt="" />
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/painel'}><DashboardIcon className="icon dash"></DashboardIcon>Dashboard</Link></li>
                            <li><Link to={'/painel/service'}><SettingsIcon className="icon serv"></SettingsIcon>Meus Serviços</Link></li>
                            <li><Link to={'/painel/star'}><StarIcon className="icon star"></StarIcon>Avaliações</Link></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/painel' component={Dashboard} />
                    <Route path='/painel/service' component={Service} />
                    <Route path='/painel/star' component={Star} />
                </Switch>
            </div>
        </Router>
    )
}
export default Painel;