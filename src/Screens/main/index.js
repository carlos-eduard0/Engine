import React from 'react';
import './main.css'
import vetor from '../../img/vetor.png';
import icone1 from '../../img/icone1.svg'
import icone2 from '../../img/icone2.svg'
import icone3 from '../../img/icone3.svg'
import logoEngine from '../../img/logoEngine.png'
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Content() {
    return (
        <div className="main">
            <div className="content-main">
                <header id="header-main">
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
                        <Link to={'/cadastro'} data-aos='fade-down' data-aos-delay="200">Cadastrar minha empresa</Link>
                    </div>
                </div>
            </div>
            <section className="main-section">
                <div className="section-vetor">
                    <div data-aos='fade-right' className="vetor">
                        <img src={vetor} alt="vetor-icon" />
                    </div>
                    <div className="texto-vetor">
                        <h2 data-aos='fade-left' data-aos-delay="100">Alcance ainda mais pessoas para sua empresa</h2>
                        <h3 data-aos='fade-left' data-aos-delay="200">Adicione os seus serviços no dashboard que o resto a Engine cuida pra você.</h3>
                        <p data-aos='fade-left' data-aos-delay="300">Com a Engine você consegue promover ainda mais seus serviços automotivos, com um sistema simples e de fácil uso a gente torna o atendimento entre você e o cliente ainda mais próximo.</p>
                        <div className="buttonV">
                            <Link to={'/cadastro'} data-aos='fade-left' data-aos-delay="400">Cadastrar minha empresa</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-section">
                <div className="container">
                <div className="text-container">
                        <h1 data-aos='fade-in'>BUILD YOUR STARUP WEBSITE NOW</h1>
                        <p data-aos='fade-in' data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                <div className="cards">
                        <div className="card" data-aos='fade-left' data-aos-delay="300">
                            <img alt="Innovation" src={icone1}/> 
                            <div className="textCard">
                                <h3>Dashboard</h3>
                                <p>Lorem ipsum dolor sente-se no meio, consectetur elip adipiscing.</p>
                            </div>
                        </div>
                        <div className="card" data-aos='fade-left' data-aos-delay="400">
                            <img alt="Innovation" src={icone2}/> 
                            <div className="textCard">
                                <h3>Controle</h3>
                                <p>Lorem ipsum dolor senta elit adipiscing. enim no eros elementum</p>
                            </div>
                        </div>
                        <div className="card" data-aos='fade-left' data-aos-delay="500">
                            <img alt="Innovation" src={icone3}/> 
                            <div className="textCard">
                                <h3>Suporte</h3>
                                <p>Lorem ipsum dolor sente-se no meio, consectetur elip adipiscing. enim no eros elementum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="text-footer">
                    <div className="text-colum">
                        <h2>ENGINE</h2>
                        <p>Source is a great tool for creating modern web sites for your startups. If you need help to build your next react project.</p>
                            <ul>
                                <li><InstagramIcon className="icon"></InstagramIcon>Instagram</li>
                                <li><FacebookIcon className="icon"></FacebookIcon>Facebook</li>
                                <li><YouTubeIcon className="icon"></YouTubeIcon>YouTube</li>
                            </ul>
                    </div>
                    <div className="logoEngine">
                        <img src={logoEngine} alt=""/>
                    </div>
                </div>

                    <p id="direitos">Todos os direitos reservados para ENGINE</p>
           
            </footer>
        </div>
    );
}
export default Content;
