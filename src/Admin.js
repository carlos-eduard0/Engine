import React from 'react';
import '../src/global.css';
import '../src/Admin.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Painel from './components/admin/dashboard';
import Service from './components/admin/service';
import Star from './components/admin/star';
function Admin() {
  return (
    <Router>
      <div className="navlink">
        <nav>
          <h2>ENGINE</h2>
          <ul>
            <li><Link to={'/Dashboard'}><DashboardIcon></DashboardIcon><span>Dashboard</span></Link></li>
            <li><Link to={'/Services'}><SettingsIcon className="icon-service"></SettingsIcon><span>Meus Serviços</span></Link></li>
            <li><Link to={'/Star'}><StarIcon className="icon-star"></StarIcon><span>Avaliações</span></Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route exact path='/Dashboard' component={Painel}></Route>
          <Route exact path='/Services' component={Service}></Route>
          <Route exact path='/Star' component={Star}></Route>
        </Switch>
    </Router>

  )
}

export default Admin;
