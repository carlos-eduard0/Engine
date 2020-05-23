import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import api from '../../services/api';
import {useHistory, Redirect} from 'react-router-dom';

import './styles.css';
import logobranca from '../../img/logo-branca.png';
import { Link } from 'react-router-dom';
function Login() {
    const history = useHistory();
    const cookies = new Cookies();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            senha
        };

        // const res = await api.post('/sessions', data);
        
        // if(res.message == 'error'){
        //    alert('Usuário ou senha incorreto');
        // } else {
        //     await cookies.set('id', res.data, {path:'/painel'})
        //     try {
        //         setTimeout(function(){
        //             history.push('/painel');
        //         }, 500);
        //     } catch(err){
        //         alert('algo deu errado');
        //     }
        // }

        try{
            const res = await api.post('/sessions', data);

            cookies.set('id', res.data, {path:'/painel'}); // Coloca os dados do user no cookie

            history.push('/painel')
        } catch (err){
            alert('usuário ou senha incorreta');
        }
    }

    return (
        <div className="body-login">
            <div className="flex-login">
                <Link to={'/'}><img src={logobranca} alt="" /></Link>
                <div className="form-login">
                    <form onSubmit={handleLogin}>
                        <strong>Login</strong>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" required />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} id="senha" required />

                        <button>Login</button>
                    </form>
                </div>
                <div className="footer-text">
                    <p>Novo na Engine?</p><Link to={'/cadastro'}>Inscrever-se</Link>
                </div>
                <Link to={'/redefinir/senha'} id="esqSenha">Esqueceu sua senha?</Link>
            </div>

        </div>
    )
}
export default Login;