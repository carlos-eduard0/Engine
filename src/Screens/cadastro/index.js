import React, { useState } from 'react';
import './main.css';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import FaceIcon from '@material-ui/icons/Face';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Cadastro() {
    const [nome_empresa, setNomeEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar_senha, setConfSenha] = useState('');
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    async function addEmpresa(e) {
        e.preventDefault();

        const res = await api.post('/empresa', {
            nome_empresa,
            email,
            senha,
            confirmar_senha,
        })
        console.log(res.data);
        try {
             if (res.data){
                  Toast.fire({
                    icon: 'success',
                    title: 'Empresa cadastrada com sucesso!'
                })
            }
             if(res.data.message === 'senhas não conferem'){
                 Toast.fire({
                    icon: 'error',
                    title: 'Verifique suas senhas novamente, elas não batem!'
                })
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Erro nosso, tente atualizar a página'
            })
        }
    }
    return (
        <div className="cadastro">
            <div className="menuBackground" data-aos='fade-right' data-aos-delay="200">
                <header>
                    <nav>
                        <ul>
                            <li data-aos='fade-down' data-aos-delay="500"><HomeIcon id="icon"></HomeIcon><Link to={'/'}>Home</Link></li>
                            <li data-aos='fade-down' data-aos-delay="600"><HelpIcon id="icon"></HelpIcon>Sobre</li>
                            <li data-aos='fade-down' data-aos-delay="700"><FaceIcon id="icon"></FaceIcon>Login</li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <h1 data-aos='fade-down' data-aos-delay="800">BEM-VINDO AO ENGINE DASHBOARD.</h1>
                </div>
            </div>
            <div className="cadastroForm" data-aos='fade-left' data-aos-delay="300">
                <aside>
                    <strong>Cadastro</strong>
                    <form onSubmit={addEmpresa}>
                        <div className="input-block">
                            <label htmlFor="nomeEmpresa">Nome da Empresa</label>
                            <input type="text" required id="nomeEmpresa" value={nome_empresa} onChange={e => setNomeEmpresa(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" required id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" required id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="confirmaSenha">Confirma Senha</label>
                            <input type="password" required id="confirmaSenha" value={confirmar_senha} onChange={e => setConfSenha(e.target.value)} />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </aside>
            </div>
        </div>
    )
};

export default Cadastro;