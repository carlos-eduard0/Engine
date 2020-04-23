import React from 'react';
import { useState } from 'react';
import './main.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

import Modal from '../modal/index';

function Service() {
    const [ isModalVisible, setIsModalVisible ] = useState(false);



    return (
        <div className="body-main">
            <main className="content-service">

                <header className="header-content">
                    <h3>MEUS SERVIÇOS</h3>
                    <span><AccountCircleIcon className="iconU"></AccountCircleIcon>Casa Do Amortecedor</span>
                </header>

                <div className="link">
                    <Link className="iconNew" onClick={()=> setIsModalVisible(true)}><AddCircleOutlineIcon ></AddCircleOutlineIcon>Adicionar novo serviço</Link>
                    {isModalVisible ? 
                        (<Modal onClose={ () => setIsModalVisible(false)}>
                        </Modal>) : null}
                </div>
                <div className="services">
                    <div className="services-grid">
                        <div className="item-sevice">
                            <div className="cont-service">
                                <header><p>Troca de Amortecedor</p></header>
                                <main>
                                    <SettingsIcon className="icon-service-cont"></SettingsIcon>
                                </main>
                                <footer className="preco">
                                    <AttachMoneyIcon></AttachMoneyIcon>
                                    <h3>200,00</h3>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Service;