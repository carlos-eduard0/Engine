import React from 'react';
import './main.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Content() {
    return (
        <div className="main">
            <div className="content-main">
                <header>
                    <div className="itens">
                        <h2>ENGINE</h2>
                        <nav>
                            <ul>
                                <li><a href="/#">Início</a></li>
                                <li><a href="/#">Parceiros</a></li>
                                <li><a href="/#">Sobre</a></li>
                                <li id="button-login"><a href="/#">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="content-main-itens">
                    <div className="text">
                        <h1 data-aos='fade-down' >Mudando o conceito de oferecer serviços automotivos com um simples toque</h1>
                        <p data-aos='fade-down' data-aos-delay="100">If you do not have enough experience on how to do a modern website, you can contact us. Let me show you how to make the latest technology startup sites using the Source.</p>
                        <Link to={'/cadastro'}>Cadastrar minha empresa</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;
