import React from 'react';
import './main.css';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import FaceIcon from '@material-ui/icons/Face';
import {  Link } from 'react-router-dom';
function Cadastro() {
    return (
        <div className="cadastro">
            <div className="menuBackground" data-aos='fade-right'  data-aos-delay="200">
                <header>
                    <nav>
                        <ul>
                            <li data-aos='fade-down'  data-aos-delay="500"><HomeIcon id="icon"></HomeIcon><Link to={'/'}>Home</Link></li>
                            <li data-aos='fade-down'  data-aos-delay="600"><HelpIcon id="icon"></HelpIcon>Sobre</li>
                            <li data-aos='fade-down'  data-aos-delay="700"><FaceIcon id="icon"></FaceIcon>Login</li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <h1 data-aos='fade-down'  data-aos-delay="800">BEM-VINDO AO ENGINE DASHBOARD.</h1>
                </div>
            </div>
            <div className="cadastroForm" data-aos='fade-left' data-aos-delay="300">
                <aside>
                    <strong>Cadastro</strong>
                    <form>
                        
                        <div className="input-block">
                            <label htmlFor="nomeEmpresa">Nome da Empresa</label>
                            <input type="text"  required id="nomeEmpresa"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email"  required id="email"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" required id="senha"/>
                        </div>

                        <div className="input-block">
                            <label htmlFor="confirmaSenha">Confirma Senha</label>
                            <input type="password" required id="confirmaSenha"/>
                        </div>

                       <button type="submit">Cadastrar</button>
                    </form>
                </aside>
            </div>
        </div>
    )
}

export default Cadastro;