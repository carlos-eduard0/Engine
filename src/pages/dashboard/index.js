import React, { useState, useEffect} from 'react';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './main.css';

import Cookies from 'universal-cookie';
import api from '../../services/api';

function Painel(){
    const cookies = new Cookies();
    const [nome, setNome] = useState('');
    const empresa_id = cookies.get('id');

    useEffect(() => {
        api.get('empresa', {
            headers: {
                Authorization: empresa_id,
            }
        }).then(response => {
            setNome(response.data);
        })
    }, [empresa_id]);


    return(
       <div className="body-main">
            <main className="content">
                
                <header className="header-content">
                    <h3>DASHBOARD</h3>
                        <span><AccountCircleIcon className="iconU"></AccountCircleIcon>{nome.nome_empresa}</span> 
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
                                <p>Atualizado agora</p>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-info">
                        <div className="table">
                            <header>Pedidos Pendentes</header>
                        <table className="table-box">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Serviço</th>
                                        <th>Placa do carro</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Carlos Eduardo Mascarenhas</td>
                                        <td>Lavagem Completa</td>
                                        <td>H45DSE8</td>
                                        <td>15,00 R$</td>
                                    </tr>
                                    <tr>
                                        <td>Fabiano</td>
                                        <td>Lavagem Completa</td>
                                        <td>SAD48SD</td>
                                        <td>15,00 R$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-info">
                            <header>Pedidos Concluidos</header>
                                  <table className="table-box">
                                <thead>
                                    <tr>
                                        <th>Cod. Pedido</th>
                                        <th>Situação</th>
                                     
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>05114</td>
                                        <td>Pago Pelo App</td>
                                  
                                    </tr>
                                    <tr>
                                        <td>05115</td>
                                        <td>Pago no Local</td>
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Painel;