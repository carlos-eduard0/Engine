import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from '../dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import Main from '../main';
import './main.css'
function Painel() {
    return (
        <Router>
            <div className="body-painel">
                <div className="main-painel">
                    <h2>ENGINE</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><NavLink  to={'/painel'} className="nav-link"><DashboardIcon className="icon dash"></DashboardIcon>Dashboard</NavLink></li>
                            <li><NavLink to={'/painel/service'} className="nav-link"><SettingsIcon className="icon serv"></SettingsIcon>Meus Serviços</NavLink></li>
                            <li><NavLink to={'/painel/star'} className="nav-link"><StarIcon className="icon star"></StarIcon>Avaliações</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/painel' component={Dashboard} />
                    <Route  path='/main' component={Main} />
                </Switch>
            </div>
        </Router>
    )
}
export default Painel;