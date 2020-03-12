import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './main.css';

function Admin(){
    return(
       <div className="body-main">
            <div className="navlink">
                <nav>
                    <h2>ENGINE</h2>
                    <ul>
                        <li><DashboardIcon></DashboardIcon><span>Dashboard</span></li>
                    </ul>
                </nav>
            </div>
            <main className="content">
                <header className="header-content">
                    <h3>DASHBOARD</h3>
                    <span><AccountCircleIcon className="iconU"></AccountCircleIcon>Casa Do Amortecedor</span> 
                </header>
                <div className="content-menu">
                    <nav>
                        <ul>
                            <li>
                                <header>
                                    <span>SERVIÇOS<h3>15</h3></span>
                                    <EmojiEventsIcon className="iconD"></EmojiEventsIcon>
                                </header>
                                <p>Realizados hoje</p>
                            </li>
                            <li>
                                <header>
                                    <span>SERVIÇOS<h3>240</h3></span>
                                    <AssessmentIcon className="iconA"></AssessmentIcon>
                                </header>
                                <p>Realizados no mês</p>
                            </li>
                            <li>
                                <header>
                                    <span>RENDA<h3>3400,00</h3></span>
                                    <AttachMoneyIcon className="iconM"></AttachMoneyIcon>
                                </header>
                                <p>Arrecadado hoje</p>
                            </li>
                            <li>
                                <header>
                                    <span>Renda Mensal<h3>20.000,00</h3></span>
                                    <AccountBalanceIcon className="iconB"></AccountBalanceIcon>
                                </header>
                            
                            </li>
                        </ul>
                    </nav>
                    <div className="main-info">
                        <div className="table">
                            <header>Pedidos</header>
                        <table class="table-box">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Serviço</th>
                                        <th>Situação</th>
                                        <th>Placa do carro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Carlos Eduardo Mascarenhas</td>
                                        <td>Lavagem Completa</td>
                                        <td>Pago</td>
                                        <td>H45DSE8</td>
                                    </tr>
                                    <tr>
                                        <td>Fabiano</td>
                                        <td>Lavagem Completa</td>
                                        <td>Pagar No Local</td>
                                        <td>SAD48SD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-info">

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Admin;